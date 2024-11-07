'use client'
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Thank you for reaching out! We’ll get back to you soon.");
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatusMessage("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatusMessage("Error: Unable to submit form.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 bg-pink-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-black mb-8">Contact Us</h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">We&apos;d love to hear from you!</h2>
        
        {/* Contact Information */}
        <div className="mb-8">
          <p className="text-lg text-gray-700">Feel free to reach out if you have any questions or comments.</p>
          <ul className="mt-4 text-gray-600">
            <li>📧 Email: contact@yourcompany.com</li>
            <li>📍 Address: 123 Your Street, City, Country</li>
            <li>📞 Phone: (123) 456-7890</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-md hover:bg-pink-400"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
        
        {/* Display status message */}
        {statusMessage && (
          <p className="text-center text-lg font-semibold mt-4 text-gray-700">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
