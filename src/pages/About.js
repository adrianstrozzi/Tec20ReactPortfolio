import logo from '../assets/images/profile.jpg'
import './About.css'

const About = () => {
  return (
    <>
      <div className='title-page mt-5'>
        <h1>ABOUT ME</h1>
      </div>
      <div className='flex justify-center mt-10'>
        <img className='h-24 w-24 rounded-full object-cover'
          src={logo}
          alt="profile"
        />
      </div>
      <div className="flex justify-center mt-10 md:text-xl sm:text-base text-justify leading-10">
        <div className="flex md:w-1/2 sm:w-4/5 mb-20">
          <p>
            <span className='text-rose-500  '>Front End Web Developer</span> with a strong background in media studies and media production.
            I’m interested in learning more about <span className='text-rose-500  '>UX/UI</span> principles as I believe this will help to enhance my understanding of Front End Web Development.
            My goal is to develop responsive and beautiful <span className='text-rose-500 '>Web Pages & Apps</span> which offer the user interface elements and interactions that facilitate usability and boost engagement.
            <br></br>
            <br></br>
            I've been always driven by creativity. I'm passionate about music, so much that I went all the way to the UK to study <span className='text-rose-500  '>Music Engineering and Production</span>.
            I love films, TV series and videogames (specially RPGs). I love learning about tech in general and I'm always interested in the latest news regarding software and hardware.
          </p>
        </div>
      </div>
    </>
  )
}

export default About;