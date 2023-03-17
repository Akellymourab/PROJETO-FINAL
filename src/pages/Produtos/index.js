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
  const [lista, setLista] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/produtos')
          .then(res => res.json())
          .then(dados => setLista(dados));
  }, [])

  return (
    <div>      
      pagina de produtos
      <hr/>
        <Grid container spacing={4}>
            {lista.map(cada =>{
              return(
                <Grid item>
                <CadaProduto produto={cada.nome} valor={cada.preco}/>
                </Grid>
              )  
            })}
            
            <hr/>
            
        </Grid>
        <Footer/>
    </div>
  )
}
