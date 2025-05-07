import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_EMAIL_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'no.reply.to.confirmm@gmail.com',
      subject: `${name} <${email}>`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
