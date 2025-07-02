'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './contact.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can replace this with actual API call
    alert(`Thanks for contacting, ${form.name}!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
                <h4>Get in touch</h4>
                <p>Email: krishnendurenjit@gmail.com</p>
                <p>Phone: 08062296158</p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/krishnendu-k-r-532186118" target="_blank">
                        <FontAwesomeIcon className='fa-icon-contact' icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/KrishnenduKR" target="_blank">
                        <FontAwesomeIcon className='fa-icon-contact' icon={faGithub} size="2x" />
                    </a>
                    <a href="" target="_blank">
                        <FontAwesomeIcon className='fa-icon-contact' icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
            <div className="col-sm-4">
                <h4>Contact Me</h4>
                <form onSubmit={handleSubmit} className="mt-3">
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" required />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows={4} required />
                    </div>

                    <button type="submit" className="btn btn-color">Send</button>
                </form>

            </div>
        </div>
    </div>

  );
}
