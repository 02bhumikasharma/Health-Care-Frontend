import React, { useState } from 'react';
import './App.css';

const doctors = [
  'Dr. Smith - Cardiologist',
  'Dr. Johnson - Dermatologist',
  'Dr. Lee - General Practitioner',
];

function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.phone &&
      formData.doctor &&
      formData.date &&
      formData.time
    ) {
      setSubmitted(true);
      console.log('Appointment booked:', formData);
    } else {
      alert('Please fill out all fields');
    }
  };

  if (submitted) {
    return (
      <div className="confirmation-container">
        <h2 className="confirmation-title">Appointment Confirmed</h2>
        <p className="confirmation-text">
          Thank you <strong>{formData.name}</strong>, your appointment with{' '}
          <strong>{formData.doctor}</strong> is booked.
        </p>
        <p className="confirmation-text">
          Date: {formData.date} <br /> Time: {formData.time}
        </p>
        <button
          className="form-button"
          onClick={() => setSubmitted(false)}
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <form className="app-container" onSubmit={handleSubmit}>
      <h2 className="app-title">Book a Doctor Appointment</h2>

      <label className="form-label">
        <span>Name:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Your full name"
        />
      </label>

      <label className="form-label">
        <span>Phone Number:</span>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className="form-input"
          placeholder="10-digit phone number"
        />
      </label>

      <label className="form-label">
        <span>Select Doctor:</span>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
          className="form-select"
        >
          <option value="">--Select--</option>
          {doctors.map((doc, idx) => (
            <option key={idx} value={doc}>{doc}</option>
          ))}
        </select>
      </label>

      <label className="form-label">
        <span>Date:</span>
        <input
          type="date"
          name="date"
          value={formData.date}
          min={new Date().toISOString().split('T')[0]}
          onChange={handleChange}
          required
          className="form-input"
        />
      </label>

      <label className="form-label">
        <span>Time:</span>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="form-input"
        />
      </label>

      <button type="submit" className="form-button">Book Appointment</button>
    </form>
  );
}

export default AppointmentPage;
