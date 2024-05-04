import { useEffect } from 'react';
import React, {useState} from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [chosenDate, setChosenDate] = useState('');
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);


  const handleProceedToPayment = () => {
    if (!fullName.trim() || !contactNumber.trim() || !chosenDate.trim() || !selectedPaymentOption) {
      alert('Please fill in all required fields');
      return;
      
    }
    else{
      alert("Redirecting to your payment !!");
    }
  };

  const handleCancelPayment = () => {
    navigate('/booking');
  };

  return (
    <>
    <div className="cartinfo">
      <div className="modal">
<form className="form">
  <div className="payment--options">
  <label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="esewa"
                  checked={selectedPaymentOption === 'esewa'}
                  onChange={() => setSelectedPaymentOption('esewa')}
                />
                <img src="./src/Images/esewa.png" alt="esewa" />
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="connectips"
                  checked={selectedPaymentOption === 'connectips'}
                  onChange={() => setSelectedPaymentOption('connectips')}
                />
                <img src="./src/Images/connectips.png" alt="connectips" />
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="khalti"
                  checked={selectedPaymentOption === 'khalti'}
                  onChange={() => setSelectedPaymentOption('khalti')}
                />
                <img src="./src/Images/Khalti.png" alt="khalti" />
              </label>
  </div>
  <div className="separator">
    <hr className="line"/>
    <p>Other Information</p>
    <hr className="line"/>
  </div>
  <div className="Otherform">
  <div className="input_container">
                <label htmlFor="password_field" className="input_label">
                  Full Name
                </label>
                <input
                  id="password_field"
                  className="input_field"
                  type="text"
                  value={fullName}
                  placeholder='Enter Your Full Name'
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="input_container">
                <label htmlFor="password_field" className="input_label">
                  Contact Number
                </label>
                <input
                  id="password_field"
                  className="input_field"
                  type="tel"
                  placeholder='+977'
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <div className="input_container">
                <label htmlFor="password_field" className="input_label">
                  Choose Date
                </label>
                <div className="split">
                  <input
                    id="password_field"
                    className="input_field"
                    type="date"
                    value={chosenDate}
                    onChange={(e) => setChosenDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="bottons">
              <button className="purchase--btn" onClick={handleProceedToPayment}>
                Proceed to Payment
              </button>
              <button className="purchase--btn" onClick={handleCancelPayment}>
                Cancel Payment
              </button>
            </div>
          </form>
</div>
</div>
    </>
  )
}

export default Cart
