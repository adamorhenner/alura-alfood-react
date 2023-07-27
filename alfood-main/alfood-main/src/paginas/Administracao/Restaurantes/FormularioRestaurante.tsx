import { AppBar, Container, Toolbar, Typography, Link, Box, Button, TextField, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../http";
import { Link as RouterLink } from 'react-router-dom';

const FormularioRestaurante = () => {

    const parametros = useParams()

    useEffect(() => {
        if(parametros.id){
            http.get(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
        }
    },[parametros])

    const [nomeRestaurante, setNomeRestaurante] = useState('');


    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, {nome: nomeRestaurante})
            .then(()=> {
                alert('Restaurante Atualizado com sucesso!');
            })
        } else {
            http.post('restaurantes/', {nome: nomeRestaurante})
            .then(()=> {
                alert('Restaurante cadastrado com sucesso!');
            })
        }
    }



    return (
    <>
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography variant="h6">
                        Administração
                    </Typography>
                    <Box sx={{display:'flex', flexGrow:1}}>
                        <Link component={RouterLink} to="/admin/restaurantes">
                            <Button sx={{ my:2, color:'white'}}>
                                Restaurantes
                            </Button>
                        </Link>
                        <Link component={RouterLink} to="/admin/restaurantes/novos">
                            <Button sx={{ my:2, color:'white'}}>
                                Novo Restaurante
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

        <Box>
            <Container maxWidth="lg" sx={{ mt: 1 }}>
                <Paper sx={{ p: 2}}>

                    {/* Conteúdo da pagina */}
                    <Box sx={{ display:'flex', flexDirection:"column", alignItems:"center", flexGrow: 1}}>
                        <Typography component="h1" variant="h6">Formulario de Restaurantes</Typography>
                        <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                            <TextField 
                                value={nomeRestaurante}
                                onChange={(evento) => setNomeRestaurante(evento.target.value)}
                                label="Nome do Restaurante"
                                variant="standard" 
                                fullWidth
                                required
                            />
                            <Button  sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
                        </Box>
                    </Box>
                
                </Paper>
            </Container>
        </Box>

    </>
    )
}

export default FormularioRestaurante;