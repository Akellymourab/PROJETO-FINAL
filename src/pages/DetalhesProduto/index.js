import React from "react";
import { Button, Card, Fab, Grid, Rating } from "@mui/material";
import { useParams } from "react-router-dom"
import Tenis1 from "../DetalhesProduto/img/tenis1.png"
import Tenis2 from "../DetalhesProduto/img/tenis2.png"
import Tenis3 from "../DetalhesProduto/img/tenis3.png"
import Tenis4 from "../DetalhesProduto/img/tenis4.png"
import Tenis5 from "../DetalhesProduto/img/tenis5.png"
import { Stack } from "@mui/system";
import Zoom from "react-img-zoom";
import { ChevronLeft, ChevronRight, } from "@mui/icons-material";
import "../DetalhesProduto/styles.scss"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";


export default function DetalhesProduto(){
    const {id} = useParams();
    const [atual, setAtual] = React.useState(0);
    const [color, setColor] = React.useState('Todas as cores');
    const [setListaTenis] = React.useState([]);

    const imagens = [
        Tenis1,
        Tenis2,
        Tenis3,
        Tenis4,
        Tenis5,
    ];

    const Items = () => {

        return imagens.map((cada, posicao) => {
            return (
                <Grid item xs={2.4}>
                    <Card onClick={() => setAtual(posicao)} sx={(atual === posicao) && {border: "2px solid #C92071"}}>
                        <img width="100%" src={cada} alt=""/>
                    </Card>
                </Grid>
            );
        });
    }

    function anterior(){
        if(atual === 0){
            setAtual(imagens.length - 1 )
        }else{
            setAtual(atual - 1);
        }
    }
    function proximo(){
        if(atual < imagens.length - 1){
            setAtual(atual +1)
        }else{
            setAtual(0)
        }
    }

    function buscarTenis(){
        fetch("http://localhost:8000/bones")
        .then(res => res.json())
        .then(lista => {
            setListaTenis(lista);
        })
    }

    React.useEffect(() => {
        let intervalo = setInterval(proximo, 3000)

        return () => clearInterval(intervalo);
    });

    React.useEffect(() => {
        buscarTenis();
    }, [])

    return(
        
        <div className="product-details">
            <Navbar/>
            <Menu/>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Card align="center">
                        <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                            <ChevronLeft sx={{fontSize: "60px"}} onClick={anterior}/>

                            {imagens.map((img, key) => (
                                <div style={{display: key === atual?'block':'none'}} >
                                    <Zoom width={400} height={400} zoomScale={2} img={img}/>
                                </div>
                            ))}

                            <ChevronRight sx={{fontSize: "60px"}} onClick={proximo}/>
                        </Stack>
                    </Card>
                    
                    <Grid container spacing={2}>
                        <Items/>
                    </Grid>
                    
                </Grid>

                <Grid item xs={5}>
                    <div className="title">
                        Tenis Nike
                    </div>
                    <br/>
                    <div className="ref">
                        Casual | Nike
                    </div>
                    <br/>
                    <div className="reviews">

                        <Rating value={4}/>
                    </div>
                    <br/>
                    <div>
                        $299
                    </div>
                    <br/>
                    <div>
                        <p>A nível organizacional, a valorização de fatores subjetivos <br/>
                        cumpre um papel essencial na formulação do sistema de <br/>
                        participação geral.</p>
                    </div>
                    <br/>
                    <div>
                        Tamanho
                    </div>
                    <br/>
                    <div>
                        <small>{color}</small>
                        <br/>
                        <br/>
                        <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Roxo')}color="secondary"></Fab>
                        <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Azul')}color="primary"></Fab>
                        <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Verde')}color="success"></Fab>
                        <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Vermelho')}color="error"></Fab>
                    </div>
                    <br/>
                    <br/>
                    <Button className="buy" variant="contained">Comprar</Button>
                </Grid>
                
            </Grid>
            
            <Footer/>
            
        </div>
    )
}