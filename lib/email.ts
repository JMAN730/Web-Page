'use server'

export type EmailResult =
  | { success: true }
  | { success: false; error: string };

export interface SendEmailParams {
  to: string;
  subject: string;
  text: string;
  replyTo?: string; // customer's email for business replies
}

export type EmailProvider = (p: SendEmailParams) => Promise<EmailResult>;

async function sendViaResend({ to, subject, text, replyTo }: SendEmailParams): Promise<EmailResult> {
  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: 'RESEND_API_KEY is not configured' };
  }
  try {
    // Dynamic import so that MOCK_EMAIL / no-key code paths never attempt to resolve 'resend' at load time.
    // This allows full verification (including form submits under MOCK) even if the package is not yet installed in node_modules.
    // When using the real provider the module is loaded on-demand in the non-mock branch.
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'SoftBase Labs <onboarding@resend.dev>', // TODO: replace with verified domain when ready (e.g. hello@softbaselabs.com)
      to,
      subject,
      text,
      reply_to: replyTo,
    });
    if (error) {
      console.error('[email:resend] send failed', { to, subject, error: error.message });
      return { success: false, error: error.message || 'Resend error' };
    }
    return { success: true };
  } catch (err: any) {
    console.error('[email:resend] exception', { to, subject, err: String(err) });
    return { success: false, error: err?.message || 'Unknown Resend error' };
  }
}

async function sendViaMock({ to, subject, text, replyTo }: SendEmailParams): Promise<EmailResult> {
  console.log('[email:mock] would send', {
    to,
    subject,
    replyTo,
    preview: text.slice(0, 200) + (text.length > 200 ? '...' : ''),
    timestamp: new Date().toISOString(),
  });
  // Simulate occasional transient failure for testing error paths (remove in prod if desired)
  if (process.env.MOCK_EMAIL_FAIL === '1') {
    console.error('[email:mock] injected failure for test');
    return { success: false, error: 'Injected mock failure (MOCK_EMAIL_FAIL=1)' };
  }
  return { success: true };
}

function shouldUseMock() {
  return process.env.MOCK_EMAIL === 'true' ||
         process.env.MOCK_EMAIL === '1' ||
         !process.env.RESEND_API_KEY;
}

export async function sendEmail(params: SendEmailParams): Promise<EmailResult> {
  const provider: EmailProvider = shouldUseMock() ? sendViaMock : sendViaResend;
  const result = await provider(params);
  if (!result.success) {
    // Structured log for troubleshooting (Vercel captures this)
    console.error('[email] FINAL FAILURE', {
      to: params.to,
      subject: params.subject,
      replyTo: params.replyTo,
      error: result.error,
      provider: shouldUseMock() ? 'mock' : 'resend',
      at: new Date().toISOString(),
    });
  } else {
    console.log('[email] sent', {
      to: params.to,
      subject: params.subject,
      provider: shouldUseMock() ? 'mock' : 'resend',
    });
  }
  return result;
}

// Convenience helpers for the two use cases in the issue
export async function sendContactInquiry(input: {
  name: string;
  email: string;
  company?: string;
  message: string;
}): Promise<EmailResult> {
  const recipient = process.env.CONTACT_EMAIL || 'softbaselabs@gmail.com';
  const subject = `New contact from ${input.name}${input.company ? ` (${input.company})` : ''}`;
  const text = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    input.company ? `Company: ${input.company}` : '',
    '',
    'Message:',
    input.message,
  ].filter(Boolean).join('\n');

  // Send to business
  const business = await sendEmail({ to: recipient, subject, text, replyTo: input.email });
  if (!business.success) return business;

  // Send confirmation to the inquirer (simple, no HTML for minimal surface)
  const confirm = await sendEmail({
    to: input.email,
    subject: 'Thanks — we received your message (SoftBase Labs)',
    text: `Hi ${input.name},\n\nThanks for reaching out. We received your project inquiry and will reply within 24 hours.\n\n— SoftBase Labs\nsoftbaselabs@gmail.com`,
  });
  return confirm; // surface the customer-side result to the form UI
}

export async function sendBookingRequest(input: {
  date: string; // pretty date
  time?: string;
  note?: string;
  customerName: string;
  customerEmail: string;
}): Promise<EmailResult> {
  const recipient = process.env.CONTACT_EMAIL || 'softbaselabs@gmail.com';
  const subject = `Booking request — ${input.customerName} on ${input.date}${input.time ? ` at ${input.time}` : ''}`;
  const text = [
    `Customer: ${input.customerName} <${input.customerEmail}>`,
    `Requested: ${input.date}${input.time ? ` at ${input.time}` : ''} (30 min discovery call)`,
    '',
    'Project note:',
    input.note || '(none provided)',
    '',
    'Reply to this email to confirm or propose another time.',
  ].join('\n');

  const business = await sendEmail({ to: recipient, subject, text, replyTo: input.customerEmail });
  if (!business.success) return business;

  const confirm = await sendEmail({
    to: input.customerEmail,
    subject: `Your call with SoftBase Labs is requested for ${input.date}`,
    text: [
      `Hi ${input.customerName},`,
      '',
      `We've received your request to book a 30-min discovery call on ${input.date}${input.time ? ` at ${input.time}` : ''}.`,
      '',
      'We will confirm the exact time by email within a few hours (or propose alternatives).',
      '',
      'If you need to change details, just reply to this email.',
      '',
      '— SoftBase Labs',
    ].join('\n'),
  });
  return confirm;
}

export async function sendContactInquiryAction(input: Parameters<typeof sendContactInquiry>[0]) {
  return sendContactInquiry(input);
}

export async function sendBookingRequestAction(input: Parameters<typeof sendBookingRequest>[0]) {
  return sendBookingRequest(input);
}
