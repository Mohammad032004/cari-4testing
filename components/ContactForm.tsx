"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

const services = [
  "Software Development",
  "AI & Automation",
  "UI/UX Design",
  "QA & Testing",
  "Web / Mobile App",
  "Cloud & DevOps",
  "Something else",
];

const budgets = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "1 – 2 months",
  "2 – 4 months",
  "4 – 6 months",
  "Flexible",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  function updateField(
    field: keyof typeof form,
    value: string,
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>,
) {
  event.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to submit inquiry.",
      );
    }

    setSubmitted(true);
  } catch (error) {
    console.error(error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong.",
    );
  }
}
  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-10 text-center sm:p-16">
        <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[100px]" />

        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
          <Check className="text-emerald-400" size={28} />
        </div>

        <h3 className="relative mt-7 text-3xl font-semibold tracking-tight">
          Thanks for reaching out.
        </h3>

        <p className="relative mx-auto mt-4 max-w-md text-sm leading-7 text-white/40">
          Your project details have been captured. The CAIRN team will review
          your requirements and get back to you.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="relative mt-8 text-sm text-white/50 underline underline-offset-4 transition-colors hover:text-white"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Basic Information */}

      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
            <Mail size={15} className="text-white/50" />
          </div>

          <div>
            <p className="text-sm font-medium">Your details</p>
            <p className="text-xs text-white/30">
              Tell us how we can reach you.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Name"
            placeholder="Your name"
            value={form.name}
            onChange={(value) => updateField("name", value)}
            required
          />

          <Input
            label="Email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(value) => updateField("email", value)}
            required
          />

          <Input
            label="Company"
            placeholder="Company name"
            value={form.company}
            onChange={(value) => updateField("company", value)}
          />
        </div>
      </div>

      {/* Project */}

      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
            <MessageSquare size={15} className="text-white/50" />
          </div>

          <div>
            <p className="text-sm font-medium">Your project</p>
            <p className="text-xs text-white/30">
              Give us a little context.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Select
            label="What do you need?"
            placeholder="Select a service"
            value={form.service}
            options={services}
            onChange={(value) => updateField("service", value)}
            required
          />

          <Select
            label="Estimated budget"
            placeholder="Select budget"
            value={form.budget}
            options={budgets}
            onChange={(value) => updateField("budget", value)}
          />

          <Select
            label="Timeline"
            placeholder="When do you want to start?"
            value={form.timeline}
            options={timelines}
            onChange={(value) => updateField("timeline", value)}
          />
        </div>
      </div>

      {/* Message */}

      <div>
        <label className="mb-2 block text-xs text-white/40">
          Tell us about your project
        </label>

        <textarea
          required
          rows={7}
          value={form.message}
          onChange={(event) =>
            updateField("message", event.target.value)
          }
          placeholder="What are you trying to build? What problem are you trying to solve?"
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
        />
      </div>

      {/* Submit */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-white/25">
          By submitting this form, you agree that CAIRN may contact you about
          your project inquiry.
        </p>

        <button
          type="submit"
          className="group flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all hover:scale-[1.02]"
        >
          Send Inquiry

          <Send
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </form>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs text-white/40">
        {label}
        {required && <span className="ml-1 text-violet-400">*</span>}
      </label>

      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
      />
    </div>
  );
}

/* =========================================================
   SELECT
========================================================= */

function Select({
  label,
  placeholder,
  value,
  options,
  onChange,
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs text-white/40">
        {label}
        {required && <span className="ml-1 text-violet-400">*</span>}
      </label>

      <div className="relative">
        <select
          required={required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 pr-10 text-sm text-white outline-none transition-all focus:border-violet-400/40 focus:bg-white/[0.04]"
        >
          <option value="" disabled className="bg-[#0b0b0b]">
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#0b0b0b]"
            >
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30"
        />
      </div>
    </div>
  );
}