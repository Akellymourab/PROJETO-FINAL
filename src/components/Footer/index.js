import React from "react";
import '../Footer/styles.css';
import imagem from '../Footer/imgDigitalStore.png' 

export default function Footer() {
    return (
        
        <div>
            <div class="corpoF">
            
                <div class="logo">
                
                    <img src={imagem}/>
                
                </div>   
                <p>Desta maneira, o início da atividade geral de 
                    <br/>
                    formação e atitudes representa uma abertura para a
                    <br/>
                    melhoria do impacto na agilidade decisória.</p>
                        
        
    
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
            
        </div>
         
    )
}
