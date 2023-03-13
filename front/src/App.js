import Produto from "./components/Produto";
import { Grid, Container, Link} from "@mui/material"
import { Stack } from "@mui/system"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../src/components/Produto/style.css"
import "./estilo.css"


export default function App()
{
  return(
    <div>
      <Container>
        <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'space-between'}}>
          <h4>Produtos em Alta</h4>
          <button className="a">Ver todos <ArrowRightAltIcon /></button>
        </Stack>
        <br/>
        <Grid container spacing={3}>
          <Grid item md={3}>
           <Produto/>
          </Grid>
          <Grid item md={3}>
           <Produto/>
          </Grid>
          <Grid item md={3}>
           <Produto/>
          </Grid>
          <Grid item md={3}>
           <Produto/>
          </Grid>
          <Grid item md={3}>
           <Produto/>
          </Grid>
          <Grid item md={3}>
           <Produto/>
          </Grid>
          <Grid item md={3}>
           <Produto/>
          </Grid>
          <Grid item md={3}>
           <Produto/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}