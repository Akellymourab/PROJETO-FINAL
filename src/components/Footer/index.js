import React from "react";
import '../Footer/styles.css';
import imagem from '../Footer/imgDigitalStore.png' 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Icon } from "@mui/material";

export default function Footer() {
    return (
        <footer>
            <div class="corpoF">
            
                <div class="logo">
                
                    <img src={imagem}/>

                    <p>Desta maneira, o início da atividade geral de 
                    <br/>
                    formação e atitudes representa uma abertura para a
                    <br/>
                    melhoria do impacto na agilidade decisória.</p>
                    <a href="https://www.facebook.com/digitalcollegebr/">
                    <FacebookIcon sx={{ color:"white" }}/>
                    </a>        
                    <a href="https://www.instagram.com/digitalcollegebr/">
                    <InstagramIcon sx={{ color:"white" }}/>
                    </a>        
                    <a href="https://www.facebook.com/digitalcollegebr/">
                    <TwitterIcon sx={{ color:"white" }}/>
                    </a>        
                
                </div>  
            <div className="corpoTextos">     
                
        
    
                <div class="inf">
                        
                    <ul class="botoesInf">
                        <h4>Informações</h4>
        
                        <ul>sobre drip store</ul>
                        <ul>segurança</ul>                    
                        <ul>lista</ul>
                        <ul>blog</ul>
                        <ul>trabalhe conosco</ul>
                        <ul>meus pedidos</ul>
                    </ul>
                </div>
    
                <div class="cat">                    
                    <ul class="">    
                        <h4>Categotias</h4>
        
                        <ul>camisetas</ul>
                        <ul>calças</ul>                    
                        <ul>bonés</ul>
                        <ul>headphones</ul>
                        <ul>tênis</ul>
                    </ul>
                </div>
                <div class="contato">
                    <ul>
                        <h4>Contato</h4>
                    
                        Av. Santos Dumont, 1510 - 
                        <br/>
                        1 andar - Aldeota, Fortaleza - 
                        <br/>
                        CE, 60150-161
                        <br/>
                        (85)3051-3411
                    </ul>
                </div>
            </div>
            {/* <hr/>
            <p>@2023 Digital College</p> */}
            </div>
            
    </footer>     
    )
}
