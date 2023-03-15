import React from "react";
import { Card, Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom"
import Tenis1 from "../DetalhesProduto/img/tenis1.png"
import Tenis2 from "../DetalhesProduto/img/tenis2.png"
import Tenis3 from "../DetalhesProduto/img/tenis3.png"
import Tenis4 from "../DetalhesProduto/img/tenis4.png"
import Tenis5 from "../DetalhesProduto/img/tenis5.png"
import {ChevronLeft, ChevronRight} from "@mui/icons-material"

export default function DetalhesProduto() {
    const {id} = useParams ();
    const [atual, setAtual] = React.useState (2);

    const imagens = [
        Tenis1, Tenis2, Tenis3, Tenis4, Tenis5,
    ];

    const Itens =() => {                

        
        return imagens.map(cada => {
            return (
                <Grid item xs={2.4}>
                    <Card>
                        <img src={cada} width= "100%"/>
                    </Card>
                </Grid>
            );
        });
    }

    function anterior (){
        if(atual === 0){
            setAtual(imagens.length -1);
        }else{
            setAtual(atual -1);
        }
    }
    function proximo (){
        if(atual < imagens.length -1){
        setAtual(atual + 1);
        }else{
            setAtual(0)
        }
    }

    return(
        <div>
            detalhes do produto {id}

            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Card align= "center">
                        <Stack 
                        direction="row"
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                        <ChevronLeft onClick={anterior} />
                    
                        <img width="400px" src={imagens[atual]}/>
                        <ChevronRight onClick={proximo}/>
                        </Stack>
                    </Card>
                    <Grid container spacing={2}>
                        <Itens/>
                    </Grid>

                </Grid>
                <Grid item xs={5}>
                    informaçoes 
                </Grid>
            </Grid>
        </div>
    )
}