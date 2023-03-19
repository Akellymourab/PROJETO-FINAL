import {Paper, Stack, Badge, Container, Grid} from "@mui/material";
import React from "react";
import tenis from './tenis.png'
import '../Produto/style.css'
import "../../estilo.css"
import LinkProduto from "../LinkProduto";

export default function Produto(){
    return(
        <>
            <Container>
                <LinkProduto/>
                <br/>
                <Grid container spacing={3}>
                    <Grid item md={3}>
                        <Stack >
                            <Paper className="quadro" elevation={2}>
                            <Badge className="desconto"><strong>30% off</strong></Badge>
                                <img className="local1" src={tenis}/>
                            </Paper>
                        </Stack>
                            <span>Tenis</span>
                            <p className="dt">K-Swiss V8 - Masculino</p>
                            <p className="money"><s>$200 </s><strong>$100</strong></p>
                    </Grid>

                    <Grid item md={3}>
                        <Stack >
                            <Paper className="quadro" elevation={2}>
                            <Badge className="desconto"><strong>30% off</strong></Badge>
                                <img className="local1" src={tenis}/>
                            </Paper>
                        </Stack>
                            <span>Tenis</span>
                            <p className="dt">K-Swiss V8 - Masculino</p>
                            <p className="money"><s>$200 </s><strong>$100</strong></p>
                    </Grid>

                    <Grid item md={3}>
                        <Stack >
                            <Paper className="quadro" elevation={2}>
                                <img src={tenis}/>
                            </Paper>
                        </Stack>
                            <span>Tenis</span>
                            <p className="dt">K-Swiss V8 - Masculino</p>
                            <p className="money"><s>$200 </s><strong>$100</strong></p>
                    </Grid>

                    <Grid item md={3}>
                        <Stack >
                            <Paper className="quadro" elevation={2}>
                                <img src={tenis}/>
                            </Paper>
                        </Stack>
                            <span>Tenis</span>
                            <p className="dt">K-Swiss V8 - Masculino</p>
                            <p className="money"><s>$200 </s><strong>$100</strong></p>
                    </Grid>

                    <Grid item md={3}>
                        <Stack >
                            <Paper className="quadro" elevation={2}>
                                <img src={tenis}/>
                            </Paper>
                        </Stack>
                            <span>Tenis</span>
                            <p className="dt">K-Swiss V8 - Masculino</p>
                            <p className="money"><s>$200 </s><strong>$100</strong></p>
                    </Grid>

                    <Grid item md={3}>
                        <Stack >
                            <Paper className="quadro" elevation={2}>
                                <img src={tenis}/>
                            </Paper>
                        </Stack>
                            <span>Tenis</span>
                            <p className="dt">K-Swiss V8 - Masculino</p>
                            <p className="money"><s>$200 </s><strong>$100</strong></p>
                    </Grid>

                    <Grid item md={3}>
                        <Stack >
                            <Paper className="quadro" elevation={2}>
                                <img src={tenis}/>
                            </Paper>
                        </Stack>
                            <span>Tenis</span>
                            <p className="dt">K-Swiss V8 - Masculino</p>
                            <p className="money"><s>$200 </s><strong>$100</strong></p>
                    </Grid>

                    <Grid item md={3}>
                        <Stack >
                            <Paper className="quadro" elevation={2}>
                                <img src={tenis}/>
                            </Paper>
                        </Stack>
                            <span>Tenis</span>
                            <p className="dt">K-Swiss V8 - Masculino</p>
                            <p className="money"><s>$200 </s><strong>$100</strong></p>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}