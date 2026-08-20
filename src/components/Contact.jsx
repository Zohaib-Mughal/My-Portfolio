import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  textarea = false,
}) => {
  const Tag = textarea ? 'textarea' : 'input';

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <Tag
        id={name}
        type={!textarea ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={textarea ? 5 : undefined}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="w-full rounded-xl border border-gray-300 bg-white/80 px-4 py-3 text-sm text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    // Check EmailJS configuration before sending
    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      console.error('EmailJS environment variables are missing:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const templateParams = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm(initialForm);

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#e5e5e5] px-6 py-20 text-center text-black sm:px-10 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-2xl">

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let's work together
        </h2>

        <p className="mx-auto mt-4 mb-10 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
          Have a project in mind or just want to connect? Send a message and
          I'll get back to you as soon as I can.
        </p>

        <form onSubmit={handleSubmit} className="text-left">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-6">
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mt-6">
            <FormField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              textarea
            />
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === 'sending' ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>

                  Sending...
                </>
              ) : status === 'success' ? (
                'Sent!'
              ) : (
                'Send Message'
              )}
            </button>

            {status === 'success' && (
              <p className="w-full rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800 ring-1 ring-green-200 sm:w-auto">
                Message sent successfully!
              </p>
            )}

            {status === 'error' && (
              <p className="w-full rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 ring-1 ring-red-200 sm:w-auto">
                Something went wrong. Please email me at{' '}
                <a
                  href="mailto:zohaibmughal0122@gmail.com"
                  className="font-medium underline hover:text-red-900"
                >
                  zohaibmughal0122@gmail.com
                </a>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;