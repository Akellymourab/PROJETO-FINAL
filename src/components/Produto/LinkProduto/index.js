import React from 'react'
import { Stack, Container } from "@mui/system"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./style.css"

export default function LinkProduto(){
    return(
        <div>
            <Container>
                <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                    <h4>Produtos em Alta</h4>
                    <button className="a">Ver todos <ArrowRightAltIcon /></button>
                </Stack>
            </Container>
        </div>
    )
}