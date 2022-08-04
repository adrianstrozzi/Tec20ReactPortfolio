import './Project.css'

const Project = (props) => {
  return (

    <div class="item-container mt-5">
      <div
        class="card-body transition hover:duration-300 hover:bg-gray-200 flex flex-col p-5 rounded-3xl shadow-lg bg-gray-300 items-center">
        <a href={props.applink} target="_blank" rel="noreferrer">
          <img src={props.image} class="rounded-xl object-contain h-28 w-70" alt="screenshot"></img>
        </a>
        <h5 class="text-fuchsia-600 text-xl my-4 font-bold uppercase">{props.title}</h5>
        <a href={props.githublink} target="_blank" rel="noreferrer">
          <svg className="w-8 h-8 fill-white hover:opacity-75" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 
            3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 
            1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
            0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 
            3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
            1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 
            0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        </a>
        <br></br>
        <p>{props.description}</p>
        <br></br>
      </div>
    </div>

  )
}

export default Project;



/* <div class="item-container flex justify-center mt-5 items-center">
      <div
        class="transition hover:duration-300 hover:bg-gray-200 flex flex-col p-7 rounded-xl shadow-lg bg-gray-300 items-center">
        <a href="https://adrianstrozzi.github.io/Tec03PasswordGenerator/" target="_blank" rel="noreferrer">
          <img src="./assets/images/password-generator.png" class="rounded-xl object-contain h-28 w-70" alt="screenshot"></img>
        </a>
        <h5 class="text-purple-700 text-xl my-4 font-bold uppercase">Password Generator</h5>
        <a href="https://github.com/adrianstrozzi/Tec03PasswordGenerator" target="_blank" rel="noreferrer">
          <p class="text-sky-500 underline">GitHub</p>
        </a>
        <br></br>
        <p>Allows to set length and include/exclude letters, numbers and special
          characters.</p>
        <br></br>
        <h4 class="font-bold">Technologies:</h4>
        <br></br>
        <ul class="text-sm">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <br></br>
          <br></br>
        </ul>
      </div>
    </div> */