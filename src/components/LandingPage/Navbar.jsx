import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@material-ui/core';
const Navbar = () => {
    return (
        <div className="Navbar" position="static">
            <AppBar position="static" style={{background:"#E5E5E5", color:"black", textAlign:"center"}} elevation='0'>
                <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    
                >
                    <MenuIcon />
                </IconButton>
                <h1>TV Maze</h1>
                <Button color="inherit" href="/">Home</Button>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default Navbar