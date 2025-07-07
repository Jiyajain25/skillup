import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: '600px' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

