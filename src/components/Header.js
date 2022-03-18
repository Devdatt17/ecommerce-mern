import React from 'react'
import {
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    OutlinedInput,
    InputAdornment,
    Stack
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
    return (
        <Box>
            <AppBar position="static" sx={{ justifyContent: 'center', alignItems: "center" }}>
                <Toolbar
                    sx={{
                        width: '70%'
                    }}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, margin: '10px' }}>
                        Virtual Shopping
                    </Typography>
                    <OutlinedInput
                        placeholder='Search for products, brands and more'
                        variant="outlined"
                        size="small"
                        sx={{ backgroundColor: '#fff', margin: '10px', borderRadius: '4px', width: '40%' }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton type="submit" sx={{ backgroundColor: '#fff' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <Stack spacing={2} direction="row">
                        <Button sx={{ color: '#fff' }} endIcon={<ShoppingCartIcon />}>Cart</Button>
                        <Button sx={{ color: '#fff' }} endIcon={<ExpandMoreIcon />}>More</Button>
                        <Button variant="contained" color="success">Login</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header