import { Container, Grid } from "@mui/material";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import ColecaodeDestaque from "../../components/ColecoesDestaque";
import Menu from "../../components/Menu";
import Produto from "../../components/Produto";

export default function Home(){
  return (
    <div>
       <Banner/>

      <Menu />

      <Container>
        <Grid container spacing={2} >
         
          <Grid item md={4}>
          <Banner />
          </Grid>

          <Grid item md={8}>
          <Carousel />
          </Grid>
         
        </Grid>
      
      </Container>

      <ColecaodeDestaque />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3}>
          <Produto />
          </Grid>
          <Grid item md={3}>
          <Produto />
          </Grid>
          <Grid item md={3}>
          <Produto />
          </Grid>
          <Grid item md={3}>
          <Produto />
          </Grid>
          <Grid item md={3}>
          <Produto />
          </Grid>
      </Grid>
      </Container>
  
      
      
    </div>
)}
