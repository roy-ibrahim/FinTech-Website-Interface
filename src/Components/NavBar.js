import logo from '../images/logo.png'
import '../Styling/navbar.css'
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navBar">
            <img src={logo} width={"150px"} height={"65px"} alt=""></img>
            <ul>
            <li><NavLink activeClassName="active" to="/" className="nonactive">Home</NavLink></li>
            <li>
                <NavLink activeClassName="active" to="/about-us" className="nonactive">About us</NavLink>
            </li>
            <li><NavLink activeClassName="active" to="/contact-us" className="nonactive">Contact us</NavLink></li>
            </ul>
        </div>
      );
  }
  
  export default NavBar;
  