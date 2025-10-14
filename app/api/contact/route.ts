import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  company: z.string().optional(),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'E-Mail-Service nicht konfiguriert' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Intro Group <no-reply@introgroupgermany.com>',
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@introgroupgermany.com',
      subject: `Neue Kontaktanfrage von ${validatedData.name}`,
      text: `
Name: ${validatedData.name}
E-Mail: ${validatedData.email}
${validatedData.company ? `Unternehmen: ${validatedData.company}` : ''}

Nachricht:
${validatedData.message}
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Versenden der E-Mail' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Ungültige Eingabedaten', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}

