import { Resend } from 'resend';

export const handler = async (event: any) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Email service configuration error' }),
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['christian.saccani99@gmail.com'],
      subject: `New Contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error: any) {
    console.error('Error in Netlify Function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
};
