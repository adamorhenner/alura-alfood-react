import { AppBar, Container, Toolbar, Typography, Link, Box, Button, Paper } from "@mui/material";
import { Outlet, Link as RouterLink } from 'react-router-dom';

const PaginaBaseAdmin = () => {
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
                        <Link component={RouterLink} to="/admin/pratos">
                            <Button sx={{ my:2, color:'white'}}>
                                Pratos
                            </Button>
                        </Link>
                        <Link component={RouterLink} to="/admin/pratos/novo">
                            <Button sx={{ my:2, color:'white'}}>
                                Novo Prato
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
                        <Outlet/>
                </Paper>
            </Container>
        </Box>
    </>
    )
}

export default PaginaBaseAdmin;