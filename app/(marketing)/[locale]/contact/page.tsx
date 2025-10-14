'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setError('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Kontaktieren Sie uns
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Haben Sie Fragen oder möchten Sie eine Demo vereinbaren? Wir freuen uns auf Ihre
            Nachricht!
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Kontaktinformationen</h2>
              <p className="text-muted-foreground mb-6">
                Wir sind für Sie da und beantworten Ihre Fragen gerne persönlich.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">E-Mail</div>
                  <div className="text-sm text-muted-foreground">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>

              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <div className="text-sm text-muted-foreground">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </a>
              )}

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">
                    Folgen Sie uns auf LinkedIn
                  </div>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="font-semibold mb-2">Schnelle Antwort</h3>
              <p className="text-sm text-muted-foreground">
                Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Nachricht gesendet!</h3>
                <p className="text-muted-foreground mb-6">
                  Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-primary hover:underline"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-Mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Unternehmen
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                {error && (
                  <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    'Wird gesendet...'
                  ) : (
                    <>
                      Nachricht senden
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Mit dem Absenden stimmen Sie unserer{' '}
                  <a href="/de/legal/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

