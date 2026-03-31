"use client";

import { useState } from "react";
import type {
  ContactFormProps,
  ContactFormData,
  ContactFormErrors,
} from "./ContactForm.types";

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingresa un email valido.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  }

  const inputBaseClass =
    "w-full px-4 py-3 rounded-[5px] border text-sm font-poppins text-adipa-text-primary placeholder:text-adipa-text-secondary/50 focus:outline-none focus:border-adipa-purple transition-colors duration-200";

  return (
    <section
      id="contacto"
      className={`py-10 tablet:py-20 bg-adipa-light-bg ${className}`}
      aria-label="Formulario de contacto"
    >
      <div className="max-w-container mx-auto px-5 tablet:px-10">
        <h2 className="text-2xl tablet:text-3xl font-semibold text-adipa-text-primary text-center mb-8">
          Contactanos
        </h2>

        {isSubmitted ? (
          <div
            className="max-w-lg mx-auto bg-white rounded-card p-8 text-center shadow-card"
            role="alert"
          >
            <div className="w-16 h-16 bg-adipa-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-adipa-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-adipa-text-primary mb-2">
              Mensaje enviado con exito
            </h3>
            <p className="text-sm text-adipa-text-secondary">
              Nos pondremos en contacto contigo pronto.
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-6 bg-adipa-purple text-white text-sm font-medium px-6 py-2 rounded-[5px] hover:bg-adipa-purple-dark transition-colors duration-200"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-lg mx-auto bg-white rounded-card p-8 shadow-card"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-adipa-text-primary mb-1.5"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputBaseClass} ${errors.name ? "border-adipa-error" : "border-adipa-border"}`}
                placeholder="Tu nombre"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-adipa-error text-xs mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-adipa-text-primary mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputBaseClass} ${errors.email ? "border-adipa-error" : "border-adipa-border"}`}
                placeholder="tu@email.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-adipa-error text-xs mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-adipa-text-primary mb-1.5"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputBaseClass} resize-none ${errors.message ? "border-adipa-error" : "border-adipa-border"}`}
                placeholder="Escribe tu mensaje aqui..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-adipa-error text-xs mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-adipa-purple text-white text-[17px] font-medium py-3 px-8 rounded-[5px] border border-adipa-purple hover:bg-adipa-purple-dark transition-colors duration-200"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
