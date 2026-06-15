# SoftBaseLabs

We design and develop stunning, high-converting websites that elevate your brand and drive results.

## Email delivery

- Set `RESEND_API_KEY` and `CONTACT_EMAIL` (see `.env.example`).
- `MOCK_EMAIL=true` for local dev or provider testing (uses console-only mock; no emails sent).
- Failures are logged with full context (`[email] FINAL FAILURE`) to the server console / Vercel logs.
- To swap providers later, edit only `lib/email.ts` (replace `sendViaResend` / `sendViaMock` etc. and the env contract).

See `.env.example` and `lib/email.ts` for the provider switch and the two Server Actions (`sendContactInquiryAction`, `sendBookingRequestAction`).
