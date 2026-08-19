import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionLabel from './ui/SectionLabel';
import Divider from './ui/Divider';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = { name: '', email: '', phone: '', message: '' };

const FormField = ({ label, name, type = 'text', value, onChange, required, textarea }) => {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className="w-full">
      <Tag
        type={!textarea ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={textarea ? 5 : undefined}
        placeholder={`${label}${required ? '*' : ''}`.toUpperCase()}
        className="w-full resize-none border-b-2 border-black bg-transparent py-2 text-sm
          tracking-wide placeholder:text-gray-400 focus:outline-none focus:border-gray-600"
      />
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#e5e5e5] px-6 py-20 text-center text-black sm:px-10 md:px-20 md:py-28"
    >
      <SectionLabel>CONTACT</SectionLabel>

      <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
        Have a project in mind or just want to connect? Send a message and I'll get back to you as soon as I can.
      </p>
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-8 text-left">
        <FormField label="Enter your name" name="name" value={form.name} onChange={handleChange} required />
        <FormField label="Enter your email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <FormField label="Phone number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
        <FormField label="Your message" name="message" value={form.message} onChange={handleChange} required textarea />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mx-auto flex items-center gap-3 text-sm font-bold tracking-widest
            hover:opacity-60 transition-opacity disabled:opacity-40"
        >
          <span className="h-4 w-px bg-black" />
          {status === 'sending' ? 'SENDING…' : 'SUBMIT'}
          <span className="h-4 w-px bg-black" />
        </button>

        {status === 'success' && (
          <p className="text-center text-sm font-medium text-green-700">
            Message sent — thanks for reaching out!
          </p>
        )}
        {status === 'error' && (
          <p className="text-center text-sm font-medium text-red-600">
            Something went wrong. Try again, or email me directly at{' '}
            <a href="mailto:zohaibmughal0122@gmail.com" className="underline">
              zohaibmughal0122@gmail.com
            </a>.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;