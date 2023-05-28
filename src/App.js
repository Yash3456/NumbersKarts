import './App.css';
import Home from "../src/Pages/Home";
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from "../src/Pages/Store";
import Discount from "./Pages/Discount";
import Contactus from './Pages/Contact';
import Signin from "./Pages/signin";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route exact path="/" element ={<Home/>}/>
      <Route exact path="/store" element ={<Store/>}/>
      <Route exact path="/discount" element ={<Discount/>}/>
      <Route exact path="/Contact" element={<Contactus/>}/>
      <Route exact path="/signin" element ={<Signin/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
