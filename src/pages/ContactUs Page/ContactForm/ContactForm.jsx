// src/components/ContactForm.js
import React, { useState, useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { useToast } from '@chakra-ui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required.';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters and spaces.';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number should be 10 digits.';
    }

    if (!formData.requirement || formData.requirement.trim() === '') {
      newErrors.requirement = 'Requirement is required.';
    }
    

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: 'Form submitted successfully.',
            description: 'Thank you for reaching out to us. We will get back to you shortly.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            requirement: '',
          });
        },
        (error) => {
          toast({
            title: 'Submission failed.',
            description: 'There was an error submitting the form. Please try again later.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>Keep in Touch With Us</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter Your E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <textarea
            name="requirement"
            placeholder="Enter Your Requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
          ></textarea>
          {errors.requirement && <p className="error">{errors.requirement}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
