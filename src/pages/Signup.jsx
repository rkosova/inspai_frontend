import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import '../styles/signUp.css'

const Signup = () => {
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
        <input type="text"  placeholder='Full Name'/>
      </div>
      <div className="input">
        <img src={email_icon} alt="icon of a envelope" />
        <input type="email" placeholder='Email'/>
      </div>
      <div className="input">
        <img src={password_icon} alt="icon of a lock" />
        <input type="password" placeholder='Password'/>
      </div>
      <div className="input">
        <img src={password_icon} alt="icon of a lock" />
        <input type="password" placeholder='Confirm Password'/>
      </div>
      <div className="submit-signup">
        <div className="submit">Sign Up</div>
      </div>
    </div>
  </div>
  </div>
  )
};

export default Signup;
