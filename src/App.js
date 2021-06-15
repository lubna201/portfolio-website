import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/HomePage/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import PortfolioMain from './Components/PortfolioMain/PortfolioMain';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';
import Blog from './Components/Blog/Blog';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/aboutMe">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/portfolio">
          <PortfolioMain></PortfolioMain>
        </Route>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
