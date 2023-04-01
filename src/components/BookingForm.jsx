import React, { useState } from 'react';

const BookingForm = ({ movie }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date:'',
    numberOfTickets: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(formData));
  };
  const today = new Date().toISOString().substr(0, 10); 
  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
        />
      </div>
      <div>
        <label htmlFor='show'>Show:</label>
        <input
          type='text'
          id='show'
          name='show'
          value={movie.name}
          readOnly
        />
      </div>
      <div>
      <label htmlFor='date'>date: </label>
    <input 
           type='date'
           name='date' 
           min={today} 
           value={formData.date} 
           onChange={handleChange}
 />
 
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
        placeholder='Email'
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='phone'>Phone:</label>
        <input
         placeholder='Phone Number'
          type='tel'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='numberOfTickets'>Number of Tickets:</label>
        <input
          min ='1'
          max='20'
          type='number'
          id='numberOfTickets'
          name='numberOfTickets'
          value={formData.numberOfTickets}
          onChange={handleChange}
        />
      </div>
     <div className='clickbutton'>
      <button type='submit' className='click'>Book Ticket</button></div>
    </form></div>
  );
};

export default BookingForm;