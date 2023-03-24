
import { Container, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import OfertaEspecial from "../../components/OfertaEspecial";
import Footer from "../../components/Footer"
import ColecoesDestaque from "../../components/ColecoesDestaque";
import Produto from "../../components/Produto";


export default function Home(){
  return (
    <div>
      
      
        <Navbar />
       

      <br/>

      <Container>
        <Menu />
      </Container>

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
      
      <Container>
        <ColecoesDestaque/>
      </Container>
      <Container>
        <Produto/>
      </Container>
      
      <OfertaEspecial/>

      <Footer/>
      
    </div>
)}