import React, { useState } from 'react';
import "./FormSection.css";

const FormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <section className="formBox">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1>Request A Quote</h1>
        </div>
        <div className="name">
          <p>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              pattern="[A-Za-z\s]+"
              title="First Name should only contain letters and spaces."
            />
          </p>
          <p>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              pattern="[A-Za-z\s]+"
              title="Last Name should only contain letters and spaces."
            />
          </p>
        </div>
        <div className="name">
          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="\d{10}"
              title="Phone number should be 10 digits."
            />
          </p>
        </div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button id="btn" type="submit">Get in touch</button>
      </form>
    </section>
  );
}

export default FormSection;
