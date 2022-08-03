import classes from './Navbar.module.css'
import { Link } from 'react-router-dom';
import logo from '../assets/images/profile.jpg'


const Navbar = () => {
  return (

    <header className={classes.header}>
      <div className={classes.image}>
        <img
          src={logo}
          alt="profile"
        />
      </div>

      <nav>
        <ul>
          {/* <li>z
            <img
              src={logo}
              alt="profile"
            />
          </li> */}
          <li>
            <Link to="/home">About Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;