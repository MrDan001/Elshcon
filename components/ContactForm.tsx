"use client";

import { useState } from "react";
import { ENQUIRY_CATEGORIES } from "@/lib/content";

/**
 * Concept only: nothing is sent anywhere. It shows how enquiry
 * categories could route a message to the right team.
 */
export default function ContactForm() {
  const [category, setCategory] = useState("");
  const [sent, setSent] = useState(false);

  const label =
    ENQUIRY_CATEGORIES.find((c) => c.value === category)?.label ?? "the right team";

  if (sent) {
    return (
      <div role="status" className="card border-teal">
        <h3 className="text-lg font-bold text-navy">Concept only</h3>
        <p className="mt-2 text-sm text-slate-700">
          In a live version, this enquiry would be routed to the team for{" "}
          <strong>{label}</strong>. Nothing has been sent from this concept.
        </p>
        <button
          type="button"
          className="btn-secondary mt-4"
          onClick={() => setSent(false)}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form
      className="card space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label htmlFor="category" className="block text-sm font-semibold text-navy">
          What is your enquiry about?
        </label>
        <select
          id="category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block min-h-[48px] w-full rounded-lg border border-slate-300 bg-white px-3 text-base"
        >
          <option value="" disabled>
            Select a category
          </option>
          {ENQUIRY_CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy">
          Your name
        </label>
        <input
          id="name"
          required
          autoComplete="name"
          className="mt-1 block min-h-[48px] w-full rounded-lg border border-slate-300 px-3 text-base"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 block min-h-[48px] w-full rounded-lg border border-slate-300 px-3 text-base"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-base"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send enquiry
      </button>
      <p className="text-xs text-slate-500">
        Concept form. It does not send messages.
      </p>
    </form>
  );
}
