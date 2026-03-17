"use client";

import { useState } from "react";
import type { ContactFormPayload } from "@/lib/types";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: ContactFormPayload = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      companyName: (formData.get("companyName") as string) || undefined,
      message: formData.get("message") as string,
    };

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        form.reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-card border border-surface-gray-border bg-white p-8 shadow-sm"
      name="Contact Form"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="contact-fullName" className="block text-[14px] font-medium text-type-heading">
          Full Name <span className="text-type-muted">(required)</span>
        </label>
        <input
          id="contact-fullName"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          className="mt-1 block w-full rounded-button border border-surface-gray-border bg-white px-4 py-3 text-type-body focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-[14px] font-medium text-type-heading">
          Email <span className="text-type-muted">(required)</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 block w-full rounded-button border border-surface-gray-border bg-white px-4 py-3 text-type-body focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-[14px] font-medium text-type-heading">
          Phone <span className="text-type-muted">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 block w-full rounded-button border border-surface-gray-border bg-white px-4 py-3 text-type-body focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200"
        />
      </div>
      <div>
        <label htmlFor="contact-companyName" className="block text-[14px] font-medium text-type-heading">
          Company Name <span className="text-type-muted">(optional)</span>
        </label>
        <input
          id="contact-companyName"
          name="companyName"
          type="text"
          autoComplete="organization"
          className="mt-1 block w-full rounded-button border border-surface-gray-border bg-white px-4 py-3 text-type-body focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-[14px] font-medium text-type-heading">
          Message <span className="text-type-muted">(required)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-button border border-surface-gray-border bg-white px-4 py-3 text-type-body focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-200"
        />
      </div>

      {status === "success" && (
        <div className="rounded-button bg-green-50 p-4 text-[14px] text-green-800" role="status">
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="rounded-button bg-red-50 p-4 text-[14px] text-red-800" role="alert">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-button bg-brand-blue px-6 py-3 text-[14px] font-semibold text-white hover:bg-brand-blue-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-70 sm:w-auto sm:min-w-[140px]"
      >
        {status === "loading" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
