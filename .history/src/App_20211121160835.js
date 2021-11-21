import './App.css';
import ComA from './components/ComA';
import Contact from './components/Contact';
import {BrowserRouter} from "react-router-dom"
import {Routes , Route} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import User from './components/User';
function App() {
  const Name = () => {
    return <h1> This is the name page </h1>
  }
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path = "/" element ={<ComA/>} />
         <Route path = "/about" element = {<About name = "about" section = "only one"/>} />
         <Route path = "/contact" element = {<Contact name = 'Contact'/>} />
         <Route path = "/user" element = {<User/>} />
         <Route path = "/contact/Name" element = {<Name/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
