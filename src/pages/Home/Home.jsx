
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Typography, 
    Grid, 
    CircularProgress, 
    Alert,
    Box, 
    Container 
} from '@mui/material';

import SelectionButtons from '../../components/SelectionButtons'; 
import ContentCard from '../../components/ContentCard'; 

// URL base de la API
const JIKAN_API_URL = 'https://api.jikan.moe/v4/top/';

function Home() {
    const [selection, setSelection] = useState('anime'); 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // MANEJADOR DE SELECCIÓN
    const handleSelect = (type) => {
        setSelection(type); 
    };

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            setError(null);
            setData([]); 

            const resource = selection === 'anime' ? 'anime' : 'manga';
            const API_URL = `${JIKAN_API_URL}${resource}`;
            
            try {
                const response = await axios.get(API_URL);
                setData(response.data.data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [selection]);

    return (
        <Container maxWidth="xl" sx={{ paddingY: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom align="center">
                Explora el Top {selection.toUpperCase()}
            </Typography>
            
            <SelectionButtons 
                onSelect={handleSelect}
                activeSelection={selection}
            />
            
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                    <CircularProgress />
                    <Typography variant="subtitle1" sx={{ ml: 2 }}>Cargando Top {selection}...</Typography>
                </Box>
            )}
            
            {error && (
                <Alert severity="error" sx={{ my: 4 }}>
                    Ocurrió un error al cargar los datos: {error}
                </Alert>
            )}
            
            {!loading && data.length > 0 && (
                <Grid container spacing={3}>
                    {data.slice(0, 10).map((item) => (
                        <ContentCard key={item.mal_id} item={item} />
                    ))}
                </Grid>
            )}
        </Container>
    );
}

export default Home;