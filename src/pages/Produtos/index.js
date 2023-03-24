import React from 'react'
import Produto from "../../components/Produto"
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function Produtos(){
    return(
        <div>
            <Navbar/>
            <br/>
            <Menu/>
            <div>
            <Produto/>
            </div>
            <Footer/>
        </div>
        
        )
}
