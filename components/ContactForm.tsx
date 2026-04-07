"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://ezra-self.vercel.app/", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="premium-label">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            className="premium-input"
            required
          />
        </div>

        <div>
          <label className="premium-label">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="premium-input"
            required
          />
        </div>
      </div>

      <div>
        <label className="premium-label">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Teaching invitation, partnership, enquiry..."
          className="premium-input"
          required
        />
      </div>

      <div>
        <label className="premium-label">Message</label>
        <textarea
          name="message"
          placeholder="Write your message here..."
          rows={6}
          className="premium-input resize-none"
          required
        />
      </div>

      <input
        type="hidden"
        name="_subject"
        value="New Ezra Project Contact Form Submission"
      />

      <button
        type="submit"
        disabled={loading}
        className="premium-button inline-block rounded-2xl bg-[#d4a44f] px-7 py-4 text-base font-semibold text-[#0b1020] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="pt-2 text-sm text-green-300">
          Your message has been sent successfully.
        </p>
      )}

      {error && (
        <p className="pt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </form>
  );
}