import React from "react";
import "../OfertaEspecial/style.css";
import imagem from "../OfertaEspecial/tenis.img.svg"


export default function OfertaEspecial() {
    return(
        <section class="corpoP">
        <section class="img">
            <div>
                <img src={imagem}/>         
            </div>
        </section>

        <section class="textos">
            <div>
                <h4 class="text1">OFERTA ESPECIAL</h4>
                <br/>
                <h1 class="text2">Air Jordan edição de colecionador</h1>
                <br/>
                <p class="text3"> É claro que o comprometimento entre as equipes cumpre um papel 
                    <br/>
                    essencial na formulação dos métodos utilizados na avaliação de resultados.</p>
                <br/>               
            </div>
            <button class="botao" >VER OFERTA</button>
        </section>    
    </section>
    )
}