"use client";

import { FormEvent, useState } from "react";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const initialState: ContactFormState = {
  name: "",
  email: "",
  message: ""
};

export default function Contact() {
  const [formState, setFormState] = useState<ContactFormState>(initialState);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSubmitted(false);

    try {
      const response = await fetch("https://formspree.io/f/mbdavqrk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState(initialState);
        setIsSubmitting(false);
        return;
      }

      setErrorMessage("Message could not be sent. Please try again.");
      setIsSubmitting(false);
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-shell" id="contact" aria-labelledby="contact-title">
      <div className="mx-auto max-w-2xl">
        <h2 id="contact-title" className="text-3xl font-semibold text-white">
          Contact
        </h2>
        <p className="mt-3 text-gray-400">
          Let us discuss impactful systems, internships, and collaboration opportunities.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formState.name}
              onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
              required
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-gray-100 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formState.email}
              onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
              required
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-gray-100 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
              required
              rows={5}
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-gray-100 outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-gray-950 hover:bg-cyan-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {isSubmitted ? (
            <p className="text-sm text-cyan-400" role="status">
              Message sent successfully.
            </p>
          ) : null}
          {errorMessage ? (
            <p className="text-sm text-red-400" role="alert">
              {errorMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
