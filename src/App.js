import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Layout/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      
        <marquee><h1>Ashok Amara</h1></marquee>
        <Navbar></Navbar>
        
          <Route exact path="/" component={<Home />}></Route>

        
        <Home></Home>
        <About></About>
        <Contact></Contact>
      
      </div>
    </Router>
  );
}

export default App;
