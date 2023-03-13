import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./componets/colecoes/index.css";
import fone from './componets/colecoes/fone.jpeg';
import camisa from './componets/colecoes/camisa.jpeg';
import tenis from './componets/colecoes/tenis.jpeg';
import { Favorite, Headphones, Earbuds } from '@mui/icons-material';
import { Icon } from '@mui/material';
import icamisa from './componets/colecoes/camisaicon.png';
import ifone from './componets/colecoes/foneicon.png';
import icalca from './componets/colecoes/calcaicon.png';
import itenis from './componets/colecoes/itenis.png';



// import {Headphones, Group, ShoppingCart} from "@mui/icons-material";
// Headphones


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p className='pa'>
         Coleções em destaque 
        </p>

        <div className='imagens'> 
        
        <img className='cam' src={camisa }  alt="camisa"/>
        <img className='fon' src={fone }  alt="fone"/>
        <img className='ten' src={tenis }  alt="tenis"/>
        </div>

        {/* <h3> Lets go for a <IoShirtSharp />? </h3> */}


        <br/> <br/> <br/>

        <p className='para'>
         Coleções em destaque 
         <br/> <br/> <br/>

         <icones className='icones'>
         <img className='icam' src={icamisa }  alt="camisa"/>
        <img className='ifon' src={ifone }  alt="fone"/>
        <img className='iten' src={itenis }  alt="tenis"/>
        <img className='icalca' src={icalca }  alt="calca"/>
        <img className='icalca' src={icalca }  alt="calca"/>

         </icones>


        
        </p>

        <br/> <br/> <br/>

        
        {/* <h3>  <IoShirtSharp />? </h3> */}


        {/* <button type="button" class="btn btn-primary">Primary</button> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
    </div>
  );
}

export default App;
