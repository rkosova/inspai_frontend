
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="navbar-logo">InspAI</div>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar