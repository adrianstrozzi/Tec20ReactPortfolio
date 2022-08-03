import { Route, Switch, Redirect } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          // Used to default / to the homepage
          exact path="/"
          render={() => {
            return (
              <Redirect to="/home" />
            )
          }}
        />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch >
      <Footer />
    </div >
  )
}

export default App;

// cv/home => Comp A
// cv/work => Comp B