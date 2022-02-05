import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import NavbarC from './Components/Navbar/Navbar';
import Formulaire from './Components/Formulaire/Formulaire';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (
<section>
  <div style={{marginBottom:"40px"}}><NavbarC/></div>
  <div><Formulaire/></div>
  <div><Footer/></div>
</section>
      
  );
}

export default App;
