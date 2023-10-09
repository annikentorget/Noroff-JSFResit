import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    queryType: 'Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (formData.queryType === '') {
      newErrors.queryType = 'Please select a query type';
    }

    if(formData.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="form__success">
        You have successfully submitted.
      </div>
    );
  }


    return (
      <div className="form">
        <h1 className="form__heading">Contact us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label className="form__label">Name</label>
            <input className="form__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
             />
             {errors.name && <div className="form__error">{errors.name}</div>}
          </div>

          <div className="form__group">
            <label className="form__label">Phone</label>
            <input className="form__input"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <div className="form__error">{errors.phone}</div>}
          </div>

          <div className="form__group">
            <label className="form__label">Query type</label>
            <select className="form__dropdown"
             name="queryType"
             value={formData.queryType}
             onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
            >
              <option value="Enquiry">Enquiry</option>
              <option value="Complaint">Complaint</option>
              <option value="Compliment">Compliment</option>
              <option value="General message">General message</option>
            </select>
            {errors.queryType && <div className="form__error">{errors.queryType}</div>}
          </div>

          <div className="form__group">
            <label className="form__label">Message</label>
            <textarea className="form__message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <div className="form__error">{errors.message}</div>}
          </div>

          <button className="form__button" type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Contact;