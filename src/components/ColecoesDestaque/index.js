import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../ColecoesDestaque/index.css";

import fone from '../ColecoesDestaque/fone.jpeg';
import camisa from '../ColecoesDestaque/camisa.jpeg';
import tenis from '../ColecoesDestaque/tenis.jpeg';
import { Favorite, Headphones, Earbuds } from '@mui/icons-material';
import { Icon } from '@mui/material';
import icamisa from '../ColecoesDestaque/camisaicon.png';
import ifone from '../ColecoesDestaque/foneicon.png';
import icalca from '../ColecoesDestaque/calcaicon.png';
import itenis from '../ColecoesDestaque/itenis.png';




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







// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import "./componets/index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();