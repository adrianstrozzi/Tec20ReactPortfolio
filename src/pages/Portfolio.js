import './Portfolio.css'
import Project from '../components/Project'
import co2 from '../assets/images/co2-calc.png'
import employee from '../assets/images/employee-tracker.png'
import note from '../assets/images/note-taker.png'
import password from '../assets/images/password-generator.png'
import weather from '../assets/images/weather-dashboard.png'
import readme from '../assets/images/readme-generator.png'

const Portfolio = () => {
  return (
    <>
      <div className='title-page mt-5'>
        <h1>PORTFOLIO</h1>
      </div>
      <div className="grid-container grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 justify-center justify-items-center mb-10">
        <Project
          applink="https://adrianstrozzi.github.io/Tec03PasswordGenerator/"
          title="Password Generator"
          githublink="https://github.com/adrianstrozzi/Tec03PasswordGenerator"
          description="Allows to set length and include/exclude letters, numbers and special
        characters."
          image={password}
        />
        <Project
          applink="https://github.com/adrianstrozzi/Tec12EmployeeTracker"
          title="Employee Tracker"
          githublink="https://github.com/adrianstrozzi/Tec12EmployeeTracker"
          description="Manage an employee database directly from your terminal."
          image={employee}
        />
        <Project
          applink="https://adrianstrozzi.github.io/Tec06WeatherDashboard/"
          title="Weather Dashboard"
          githublink="https://github.com/adrianstrozzi/Tec06WeatherDashboard"
          description="App that displays current and 5-Day forecast for searched cities."
          image={weather}
        />
        <Project
          applink="https://github.com/adrianstrozzi/Tec09GoodReadmeGenerator"
          title="Readme Generator"
          githublink="https://github.com/adrianstrozzi/Tec09GoodReadmeGenerator"
          description="Readme generator that uses Inquirer to create pre-formatted README files."
          image={readme}
        />
        <Project
          applink="https://limitless-oasis-12962.herokuapp.com/"
          title="Note Taker"
          githublink="https://github.com/adrianstrozzi/Tec11ExpressNoteTaker"
          description="App that enables the user to save and delete notes."
          image={note}
        />
        <Project
          applink="https://kuiimaldonado.github.io/co2-calculator/"
          title="CO2e Calc"
          githublink="https://github.com/KuiiMaldonado/co2-calculator"
          description="Calculate your CO2e footprint by answering a simple survey."
          image={co2}
        />
      </div>
    </>
  )
}

export default Portfolio;