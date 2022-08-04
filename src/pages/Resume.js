import './Resume.css'

const Resume = () => {
  return (
    <>
      <div className='title-page mt-5'>
        <h1>RESUME</h1>
      </div>
      <div className='mt-10'>
        <button className='w-60 h-12 bg-rose-500 rounded-xl hover:bg-rose-600 text-white'><a href="https://drive.google.com/file/d/1O6gD-eNLUcFlY68jfSJnKihRHdEX2HCY/preview"
          alt="link-to-google-drive-link" target="_blank" rel="noreferrer">OPEN RESUME</a></button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl text-fuchsia-500 font-bold">STACK</h2>
      </div>
      <div className="grid-container mt-10 md:mx-40 sm:mx-10 grid sm:grid-cols-2 md:grid-cols-3 md:grid-rows-4 gap-x-4 gap-y-4 h-80 align-middle mb-10">
        <div className="grid bg-sky-700 rounded-xl hover:bg-sky-800 hover:font-bold text-white items-center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">JavaScript</a></div>
        <div className="grid bg-sky-500 rounded-xl hover:bg-sky-600 hover:font-bold text-white items-center"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">HTML</a></div>
        <div className="grid bg-sky-300 rounded-xl hover:bg-sky-400 hover:font-bold text-white items-center"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">CSS</a></div>
        <div className="grid bg-sky-700 rounded-xl hover:bg-sky-800 hover:font-bold text-white items-center"><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a></div>
        <div className="grid bg-sky-500 rounded-xl hover:bg-sky-600 hover:font-bold text-white items-center"><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node JS</a></div>
        <div className="grid bg-sky-300 rounded-xl hover:bg-sky-400 hover:font-bold text-white items-center"><a href="https://expressjs.com/" target="_blank" rel="noreferrer">Express JS</a></div>
        <div className="grid bg-sky-700 rounded-xl hover:bg-sky-800 hover:font-bold text-white items-center"><a href="https://www.mysql.com/" target="_blank" rel="noreferrer">MySQL</a></div>
        <div className="grid bg-sky-500 rounded-xl hover:bg-sky-600 hover:font-bold text-white items-center"><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">MongoDB</a></div>
        <div className="grid bg-sky-300 rounded-xl hover:bg-sky-400 hover:font-bold text-white items-center"><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></div>
        <div className="grid bg-sky-700 rounded-xl hover:bg-sky-800 hover:font-bold text-white items-center"><a href="https://sequelize.org/" target="_blank" rel="noreferrer">Sequelize</a></div>
        <div className="grid bg-sky-500 rounded-xl hover:bg-sky-600 hover:font-bold text-white items-center"><a href="https://mongoosejs.com/" target="_blank" rel="noreferrer">Mongoose</a></div>
        <div className="grid bg-sky-300 rounded-xl hover:bg-sky-400 hover:font-bold text-white items-center"><a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL</a></div>
      </div>
    </>
  )
}

export default Resume;