import logo from './logo.svg';
import './App.css';
import ComA from './components/ComA';
import Contact from './components/Contact';
import {BrowserRouter} from "react-router-dom"
import {Route , Switch} from "react-router-dom";
import About from './components/About';
function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route path = "/about" component = {About} />
         <Route path = "/contact" component = {Contact} />
       </Switch>
    </BrowserRouter>
  );
}

export default App;