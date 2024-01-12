import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import '../styles/signUp.css'
import {useState} from 'react'


const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Handle the response accordingly

      if (response.ok){
        window.location.href = "/signin";
      }

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='home-logo'>
    <a className="active special-font" href="/">InspAI</a>
  <div className='container'>
    <div className="header">
      <div className="text">Sign Up</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">

      <div className="input">
        <img src={user_icon} alt="icon of a person" />
        <input type="text"  placeholder='First Name' value={formData.first_name}
        onChange={handleInputChange} name='first_name'/>
      </div>

      <div className="input">
        <img src={user_icon} alt="icon of a person" />
        <input type="text"  placeholder='Last Name' value={formData.last_name}
        onChange={handleInputChange} name='last_name'/>
      </div>

      <div className="input">
        <img src={email_icon} alt="icon of a envelope" />
        <input type="email" placeholder='Email' value={formData.email}
        onChange={handleInputChange} name='email'/>
      </div>

      <div className="input">
        <img src={password_icon} alt="icon of a lock" />
        <input type="password" placeholder='Password' value={formData.password}
        onChange={handleInputChange} name='password'/>
      </div>

      <div className="input">
        <img src={password_icon} alt="icon of a lock" />
        <input type="password" placeholder='Confirm Password' value={formData.confirmPassword}
        onChange={handleInputChange} name='confirmPassword'/>
      </div>

      <div className="submit-signup">
        <div className="submit" onClick={handleSignup}>Sign Up</div>
      </div>
    </div>
  </div>
  </div>
  )
};

export default Signup;
