import {Button, TextField, Alert, Badge} from "@mui/material";
import {Favorite, Group, ShoppingCart} from "@mui/icons-material";

import "./styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            
            <div  className="red">
            <ShoppingCart/>
            </div>
            

            {/* <Badge color="primary" badgeContent={"4"}>
                
            </Badge> */}

          

             {/* <Alert severity="error">Aqui vai a mensagem</Alert> */}
             
            <button className="entrar"> Entrar  </button>
            {/* <Button className="ent" color="secondary" variant="contained">Entrar</Button> */}

            <TextField className="procura" label="O que vc procura"/>

        </div>
    )
}