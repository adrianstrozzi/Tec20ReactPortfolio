import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='flex basis-4/5'>
      <ul className='navbar-container flex w-full justify-evenly'>
        <li className='hover:text-yellow-400'>
          <Link to="/Tec20ReactPortfolio/home">About</Link>
        </li>
        <li className='hover:text-yellow-400'>
          <Link to="/Tec20ReactPortfolio/portfolio">Portfolio</Link>
        </li>
        <li className='hover:text-yellow-400'>
          <Link to="/Tec20ReactPortfolio/contact">Contact</Link>
        </li>
        <li className='hover:text-yellow-400'>
          <Link to="/Tec20ReactPortfolio/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;