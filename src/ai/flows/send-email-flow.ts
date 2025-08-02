'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

const SendEmailSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
});

export type SendEmailInput = z.infer<typeof SendEmailSchema>;

// ✅ Instantiate Resend properly
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail(input: SendEmailInput) {
  return await sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailSchema,
    outputSchema: z.void(), // or return z.object({ success: z.boolean() }) if you want response
  },
  async (input) => {
    console.log('Received contact form submission:', input);

    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['muhammedfahmi04@gmail.com'],
        subject: `New message from ${input.name} on your portfolio`,
        html: `
          <p>You have a new contact form submission:</p>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        throw new Error('Failed to send email.');
      }

      console.log('Email sent successfully:', data);

    } catch (e) {
      console.error("Error sending email with Resend", e);
      throw new Error('Failed to send email.');
    }
  }
);
