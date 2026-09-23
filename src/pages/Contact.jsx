import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      "",
      form.message
    ].join("\n");

    window.location.href = `mailto:anbuselvamkgm@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <div className="contact-content">
        <header className="contact-header">
          <p className="contact-kicker">Start a conversation</p>
          <h1 className="contact-title">Have an idea? Let&apos;s talk.</h1>
          <p className="contact-intro">
            Whether you have a project in mind, a question, or an opportunity to share,
            send a message and I&apos;ll get back to you.
          </p>
        </header>

        <div className="contact-layout">
          <section className="contact-info-panel">
            <h2>Find me here</h2>
            <p>I&apos;m open to learning opportunities, collaborations, and meaningful web projects.</p>
            <div className="contact-inline">
          <div className="info-row">
            <svg className="info-icon" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="24" height="24" rx="4" fill="#2563eb" />
              <path d="M6 8.5l6 4 6-4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="4" y="6" width="16" height="12" rx="1" stroke="#fff" strokeWidth="0" fill="none" />
            </svg>
            <a href="mailto:anbuselvamkgm@gmail.com" className="contact-link">anbuselvamkgm@gmail.com</a>
          </div>

          <div className="info-row">
            <svg className="info-icon" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="24" height="24" rx="4" fill="#06b6d4" />
              <path d="M7.5 8.5c1.5 2 3.5 3.5 5.5 4s2.1.4 2.8 1.1c.7.7.6 1.7-.6 2.9-1.2 1.2-2.5 1.4-4 1.4-1.5 0-3.6-1-6-3.4C4 13 3 11 3 9.5 3 8 3.8 7 5 6.2c1.2-.8 1.9-.6 2.5-.3.6.3 1.1.8 1.5 1.6z" fill="#fff" />
            </svg>
            <a href="tel:+918489856668" className="contact-link">+91 84898 56668</a>
          </div>

          <div className="info-row">
            <svg className="info-icon" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="24" height="24" rx="4" fill="#0A66C2" />
              <path d="M6.94 8.5H9.14V17H6.94zM8.04 6.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12.04 8.5h2.02v1.17h.03c.28-.53.98-1.09 2.02-1.09 2.16 0 2.56 1.42 2.56 3.27V17h-2.2v-3.4c0-.81-.01-1.85-1.13-1.85-1.13 0-1.3.88-1.3 1.78V17h-2.2V8.5z" fill="#ffffff" />
            </svg>
            <a href="https://www.linkedin.com/in/anbu-selvam-n-727455319/" target="_blank" rel="noopener noreferrer" className="contact-link">Anbu Selvam N</a>
          </div>
            </div>
          </section>

          <section className="contact-form">
            <div className="contact-form-heading">
              <h2>Send a message</h2>
              <p>Tell me a little about what you&apos;re working on.</p>
            </div>
            <form onSubmit={handleSubmit} className="form-stack">
              <label className="form-label">
                Name
                <input name="name" value={form.name} onChange={handleChange} className="form-input" type="text" placeholder="Your name" required />
              </label>

              <label className="form-label">
                Email
                <input name="contact" value={form.contact} onChange={handleChange} className="form-input" type="email" placeholder="you@example.com" autoComplete="email" required />
              </label>

              <label className="form-label">
                Message
                <textarea name="message" value={form.message} onChange={handleChange} className="form-textarea" placeholder="Write your message" rows={5} required />
              </label>

              <div className="form-actions">
                <button type="submit" className="primary-btn">Send Message</button>
              </div>
              {submitted && <p className="form-success" role="status">Your email app opened with the message ready to send.</p>}
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}