import React from 'react';
import { Container, Typography, Button, Paper, CardMedia } from '@mui/material';
import Navbar from '../components/Navbar';
import productImage from '../assets/product.jpeg'; // Import the product image

function ProductLandingPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Container maxWidth="lg">
        <Paper elevation={3} style={{ padding: '2rem', margin: '2rem auto' }}>
          {/* Display the product image */}
          <CardMedia
            component="img"
            alt="Awesome Product"
            height="300" // Adjust the height as needed
            image={productImage} // Use the product image imported above
          />
          <Typography variant="h2" gutterBottom>
            Awesome Product
          </Typography>
          <Typography variant="h5" paragraph>
            A brief description of your product goes here. Highlight its features and benefits.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default ProductLandingPage;
