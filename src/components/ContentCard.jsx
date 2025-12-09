import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';


function ContentCard({ item }) {
    const title = item.title;
    const score = item.score;
    const type = item.type;
    const imageUrl = item.images.jpg.image_url;
    const malId = item.mal_id;

    return (
        <Grid item xs={12} sm={6} md={6} key={malId}> 
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                
                <CardMedia
                    component="img"
                    height="300"
                    image={imageUrl}
                    alt={title}
                    sx={{ objectFit: 'cover' }}
                />
                
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2" noWrap>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ⭐ Puntuación: {score}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Tipo: {type}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ContentCard;