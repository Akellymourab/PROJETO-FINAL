import {Paper, Stack, Badge} from "@mui/material";
import React from "react";
import tenis from './tenis.png'
import '../Produto/style.css'

export default function Produto(){
    return(
        <>
            <Stack>
                <Paper elevation={2}>
                <Badge className="desconto"><strong>30% off</strong></Badge>
                    <img src={tenis}/>
                </Paper>
                <span>Tenis</span>
                <p className="dt">K-Swiss V8 - Masculino</p>
                <p className="money"><s>$200 </s><strong>$100</strong></p>
            </Stack>
        </>
    )
}