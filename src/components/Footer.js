import classes from './Footer.module.css'
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/profile.jpg'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>
        Made by <a href="https://github.com/adrianstrozzi">Adrian Strozzi </a>
      </p>
    </div>
  )
}

export default Footer


