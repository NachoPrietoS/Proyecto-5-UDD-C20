import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'; // Usaremos el ícono de Twitter/X genérico

function Footer() {
  // Las propiedades de color, fuente y espaciado se heredan del estilo por defecto del AppBar

  return (
    <AppBar position="static" component="footer" sx={{ mt: 'auto' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{
            flexDirection: 'column', // Apilar el contenido verticalmente
            alignItems: 'center', // Alinear el contenido a la izquierda (o 'center' si prefieres centrado)
            py: 1, // Añade padding vertical
            minHeight: 'auto', // Permite que el toolbar se ajuste al contenido
        }} disableGutters>

          {/* Nombre de la Página / Producto */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              mb: 1, // Margen inferior
            }}
          >
            NOMBRE DE TU PÁGINA
          </Typography>

          {/* Información del Creador */}
          <Typography variant="body2" color="inherit" sx={{ mb: 1 }}>
            Creado por: **Ignacio Prieto**
          </Typography>

          {/* Enlaces a Redes Sociales */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="body2" color="inherit" sx={{ mr: 2 }}>
              Sígueme en mi Redes Sociales:
            </Typography>
            
            {/* Instagram */}
            <Link 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener" 
              color="inherit" 
              sx={{ mr: 1 }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </Link>

            {/* Facebook */}
            <Link 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener" 
              color="inherit" 
              sx={{ mr: 1 }}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </Link>

            {/* X (Twitter) */}
            <Link 
              href="https://x.com/" 
              target="_blank" 
              rel="noopener" 
              color="inherit" 
              aria-label="X (Twitter)"
            >
              <TwitterIcon />
            </Link>
          </Box>
          
          <Typography variant="caption" color="inherit" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Todos los derechos reservados.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;