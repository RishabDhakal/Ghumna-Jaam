import React, { useState } from 'react';
import Data from "../assets/Data";
import "./Booking.css";
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleBookNow = () => {
    navigate('/cart');
  };

  const filterItems = Data.filter(data => {
    return data.title && data.title.toLowerCase().includes(query.toLowerCase());
  });

  const renderFilteredData = filterItems.map(({ title, img, Price, Duration }, index) => (
    <div key={index} className="card">
      <div className="img_box">
        <img src={img} alt={title} />
      </div>
      <div className="textarea">
        <span>
          <h1>{title && title.slice(0, 20)}</h1>
          <p>{Duration}</p>
          <p>{Price}</p>
          <button className='ButtonBookNow' onClick={handleBookNow}>Book Now</button>
        </span>
      </div>
    </div>
  ));

  return (
    <>
      <section className='comp'>
        <div className="search">
          <input type="text" className='input' onChange={handleInputChange} value={query} />
          <label className="label">Search</label>
        </div>
        <div className="Projects">
          {renderFilteredData}
        </div>
      </section>
    </>
  );
};

export default Booking;
