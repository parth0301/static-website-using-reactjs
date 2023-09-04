import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Home
        </Typography>   
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit" component={Link} to="/product" style={{ textDecoration: 'none' }}>
          Product
        </Button>
        <Button color="inherit" component={Link} to="/contact" style={{ textDecoration: 'none' }}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;