
import "../styles/navbarStyles.css"
const NavBar = () => {

  return (
    <div class="topnav">
      <a class="active special-font" href="#home">InspAI</a>

    <div class="topnav-right">
        <a className="about-link" href="#about">About</a>
        <a className="train-link" href="#train">Train Model</a>
        <a className="login-link" href="#login">Log in</a>
        <a className="signup-link" href="#signup">Sign Up</a>
  </div>
</div>
  );
}

export default NavBar;
