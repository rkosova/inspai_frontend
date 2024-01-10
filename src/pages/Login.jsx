import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import '../styles/signIn.css'


const Signin = () => {
  return (
    <div className='home-logo'>
    <a className="active special-font" href="/">InspAI</a>

  
  <div className='container'>
    <div className="header">
      <div className="text">Sign In</div>
      <div className="underline"></div>
    </div>
    <div className="inputs-for-signin">
      <div className="input-signin">
        <img src={email_icon} alt="icon of a envelope" />
        <input type="email" placeholder='Email'/>
      </div>
      <div className="input-signin">
        <img src={password_icon} alt="icon of a lock" />
        <input type="password" placeholder='Password'/>
      </div>
      <div className="forgot-password">Forgot Password?  
      <span>Click here!</span>
      </div>
      <div className="submit-signin">
        <div className="submit">Sign In</div>
      </div>
    </div>
  </div>
  </div>
  )
};

export default Signin;
