'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendEmail - A function that handles sending the email.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

const SendEmailSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type SendEmailInput = z.infer<typeof SendEmailSchema>;

// Initialize Resend with your API key.
// It's recommended to use an environment variable for this.
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(input: SendEmailInput) {
  return await sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    console.log('Received contact form submission:', input);

    // UNCOMMENT THE FOLLOWING BLOCK TO ENABLE EMAIL SENDING
    // Make sure you have a RESEND_API_KEY in your .env.local file
    /*
    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // This should be a verified domain on Resend
        to: ['your-email@example.com'], // CHANGE THIS to your personal email
        subject: `New message from ${input.name} on your portfolio`,
        html: `
          <p>You have a new contact form submission:</p>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        throw new Error('Failed to send email.');
      }

      console.log('Email sent successfully:', data);

    } catch (e) {
        console.error("Error sending email with Resend", e)
        throw new Error('Failed to send email.');
    }
    */
  }
);
