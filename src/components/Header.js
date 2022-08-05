import './Header.css'
import Navbar from "./Navbar";

const Header = () => {
  return (

    <header className='header text-white flex flex-row justify-center items-center bg-purple-600 h-20'>
      <div className='flex uppercase justify-center items-center basis-1/5 '>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="text-amber-400 mx-1 h-8 w-8 fill-amber-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        Adrian Strozzi
      </div>
      <Navbar />
    </header>
  )
}

export default Header;