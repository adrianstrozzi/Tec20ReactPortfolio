import { Route, Switch, Redirect } from 'react-router-dom'

import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header />
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
        <Route path="/home" component={About} />
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