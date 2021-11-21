import logo from './logo.svg';
import './App.css';
import ComA from './components/ComA';
import Contact from './components/Contact';
import {BrowserRouter} from "react-router-dom"
import {Routes , Route} from "react-router-dom";
import About from './components/About';
function App() {
  const Name = () => {
    return <h1> This is the name page </h1>
  }
  return (
    <BrowserRouter>
       <Routes>
         <Route path = "/" element = {<ComA/>} />
         <Route path = "/about" element = {<About/>} />
         <Route path = "/contact" element = {<Contact/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
