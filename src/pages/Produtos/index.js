import React from "react";
import Footer from "../../components/Footer";
import {Card, Button, Grid} from "@mui/material"

function CadaProduto(props){
    const [quantidade, alterarQuantidade, ] = React.useState(1);

  const add = () => {
    alterarQuantidade(quantidade + 1);
  }
  const remove = () => {
    if (quantidade === 1){
        return;
    }
    alterarQuantidade(quantidade - 1)
  }
  return(
    <Card style={{width: '100%'}}>
        {props.produto} (R${props.valor})

        <Button disabled={quantidade === 1} onClick={remove}>-</Button>
        {quantidade}
        <Button onClick={add}>+</Button>
        <hr/>
        total : R${ props.valor * quantidade}
      </Card>
  )
}

export default function Produtos() {

  return (
    <div>      
      pagina de produtos
      <hr/>
        <Grid container spacing={4}>
            <Grid item>
                <CadaProduto produto= "lasanha" valor= "30.00"/>
            </Grid>
            <Grid item>
                <CadaProduto produto="risoto de camarão" valor="50.00"/>
            </Grid>
            <Grid item>
                <CadaProduto produto= "pratinho" valor= "10.50"/>
            </Grid>
            <Grid item>
                <CadaProduto produto= "x-burguer" valor= "34.99"/>
            </Grid>
            <Grid item>
                <CadaProduto produto= "batata frita 300g" valor= "14.99"/>
            </Grid>
            <Grid item>
                <CadaProduto produto= "suco de laranja 500ml" valor= "12.99"/>
            </Grid>
            <Grid item>
                <CadaProduto produto= "agua s/gas" valor= "1.50"/>
            </Grid>
            <hr/>
            
        </Grid>
        <Footer/>
    </div>
  )
}
