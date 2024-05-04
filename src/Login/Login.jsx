import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
// import Booking from '../Booking/Booking';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    if (!emailInput.value || !passwordInput.value) {
      alert('Please fill in both email and password fields.');
    } else {

      navigate('/booking');
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-box">
          <p>Login</p>
          <form>
            <div className="user-box">
              <input name="" type="email" required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input name="" type="password" required />
              <label>Password</label>
            </div>
            <a href="#" onClick={handleLogin}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
          <p>
            Don't have an account? <a href="" className="a2">Sign up!</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
