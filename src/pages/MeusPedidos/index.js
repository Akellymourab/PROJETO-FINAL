import React from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function MeusPedidos(){
    return(
        <div>
            <Navbar/>
            <br/>
            <Menu/>
            <div>
            Pagina de Meus Pedidos
            </div>
            <Footer/>
        </div>
        
        )
}
