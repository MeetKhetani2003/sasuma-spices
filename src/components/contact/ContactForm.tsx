"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, LoaderCircle, CircleCheck, MessageCircle, TriangleAlert } from "lucide-react";
import { products, whatsappLink } from "@/data/products";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [spice, setSpice] = useState("");
  const [serverMsg, setServerMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        setServerMsg(json.message ?? "Inquiry received.");
        form.reset();
        setSpice("");
      } else if (res.status === 422 && json.errors) {
        setErrors(json.errors);
        setStatus("idle");
      } else {
        setStatus("error");
        setServerMsg(json.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Network issue — please try again or call the desk.");
    }
  }

  const err = (k: string) =>
    errors[k] ? (
      <p className="mt-1.5 flex items-center gap-1 text-[11.5px] font-medium text-crimson">
        <TriangleAlert className="size-3" /> {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} className="relative" noValidate>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-gold/40 bg-gold-pale/60 p-10 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
              className="grid size-16 place-items-center rounded-full bg-forest text-gold shadow-card"
            >
              <CircleCheck className="size-8" />
            </motion.span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-forest">Inquiry Logged</h3>
            <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-moss">{serverMsg}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[11.5px] font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-600"
              >
                <MessageCircle className="size-4 text-gold" /> Faster? WhatsApp Us
              </a>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="cursor-pointer rounded-full border border-forest/25 px-6 py-3 text-[11.5px] font-bold uppercase tracking-[0.16em] text-forest transition-colors hover:border-gold hover:text-gold-dark"
              >
                Send Another
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-x-8 gap-y-2 sm:grid-cols-2"
          >
            <div className="field">
              <input id="fullName" name="fullName" type="text" placeholder=" " autoComplete="name" />
              <label htmlFor="fullName">Full Name *</label>
              {err("fullName")}
            </div>

            <div className="field">
              <input id="company" name="company" type="text" placeholder=" " autoComplete="organization" />
              <label htmlFor="company">Company Name</label>
            </div>

            <div className="field">
              <input id="phone" name="phone" type="tel" placeholder=" " autoComplete="tel" />
              <label htmlFor="phone">Mobile Number *</label>
              {err("phone")}
            </div>

            <div className="field">
              <input id="email" name="email" type="email" placeholder=" " autoComplete="email" />
              <label htmlFor="email">Email Address</label>
              {err("email")}
            </div>

            <div className="field sm:col-span-2">
              <select
                id="spice"
                name="spice"
                value={spice}
                onChange={(e) => setSpice(e.target.value)}
                className={`cursor-pointer ${spice ? "has-value" : ""}`}
              >
                <option value="" disabled hidden />
                {products.map((p) => (
                  <option key={p.id} value={`${p.name} (${p.subtitle})`}>
                    {p.name} · {p.subtitle}
                  </option>
                ))}
                <option value="Mixed / Full Range Order">Mixed / Full Range Order</option>
                <option value="Other (describe below)">Other (describe below)</option>
              </select>
              <label htmlFor="spice">Spice Selection *</label>
              {err("spice")}
            </div>

            <div className="field sm:col-span-2">
              <textarea id="message" name="message" rows={4} placeholder=" " />
              <label htmlFor="message">Message / Quantity Requirement (e.g. 500 bags × 25kg, Europe grade)</label>
            </div>

            {status === "error" && (
              <p className="flex items-center gap-2 rounded-lg border border-crimson/30 bg-crimson/5 px-4 py-3 text-[12.5px] font-medium text-crimson sm:col-span-2">
                <TriangleAlert className="size-4 shrink-0" /> {serverMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-4 inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-crimson px-9 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-ivory shadow-[0_16px_40px_-14px_rgba(206,17,38,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-dark disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:w-max sm:justify-self-start"
            >
              {status === "sending" ? (
                <>
                  <LoaderCircle className="size-4 animate-spin" /> Sending to Unjha…
                </>
              ) : (
                <>
                  Submit Inquiry
                  <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
