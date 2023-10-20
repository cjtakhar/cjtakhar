import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending the data to a server.
    console.log(formData);
  };

  return (
    <div className="contact-container contact-slide-in">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              className="input"
              id="message"
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button className="btn-submit" type="submit">Submit</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
