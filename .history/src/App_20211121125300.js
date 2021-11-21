import logo from './logo.svg';
import './App.css';
import ComA from './components/ComA';
import Contact from './components/Contact';
import {BrowserRouter} from "react-router-dom"
import {Routes , Route} from "react-router-dom";
import About from './components/About';
function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path = "/" element = {<About/>} />
         <Route path = "/contact" element = {<Contact/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
