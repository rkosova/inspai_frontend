import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import '../styles/signIn.css';
import { useState } from 'react';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Handle the response accordingly

      if (response.ok) {
        //using th edata returned from the server to see if success
        console.log('Successfully signed in!');
        
      } else {
        console.log('Sign-in failed:', data.error);
        // Handle sign-in failure
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div className='home-logo'>
      <a className='active special-font' href='/'>
        InspAI
      </a>

      <div className='container'>
        <div className='header'>
          <div className='text'>Sign In</div>
          <div className='underline'></div>
        </div>
        <div className='inputs-for-signin'>
          <div className='input-signin'>
            <img src={email_icon} alt='icon of an envelope' />
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='input-signin'>
            <img src={password_icon} alt='icon of a lock' />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className='forgot-password'>
            Forgot Password? <span>Click here!</span>
          </div>
          <div className='submit-signin'>
            <div className='submit' onClick={handleSignIn}>
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
