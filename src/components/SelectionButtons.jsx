import React from 'react';
import { Button, Stack } from '@mui/material';

function SelectionButtons({ onSelect, activeSelection }) {
    return (
        <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            sx={{ mb: 4, mt: 2 }}>
            <Button 
                variant={activeSelection === 'anime' ? 'contained' : 'outlined'}
                onClick={() => onSelect('anime')}
                size="large">
                Top Animes
            </Button>
            <Button 
                variant={activeSelection === 'manga' ? 'contained' : 'outlined'}
                onClick={() => onSelect('manga')}
                size="large">
                Top Mangas
            </Button>
        </Stack>
    );
}

export default SelectionButtons;