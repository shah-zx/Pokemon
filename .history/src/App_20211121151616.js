import logo from './logo.svg';
import './App.css';
import ComA from './components/ComA';
import Contact from './components/Contact';
import {BrowserRouter} from "react-router-dom"
import {Routes , Route} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
function App() {
  const Name = () => {
    return <h1> This is the name page </h1>
  }
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path = "/" component = {<ComA/>} />
         <Route path = "/about" render = {()=> <About name = 'About'/>} />
         <Route path = "/contact" render = {()=> <Contact name = 'Contact'/>} />
         <Route path = "/contact/Name" render = {<Name/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
 