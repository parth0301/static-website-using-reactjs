import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material'; // Import CardMedia component
import { Link } from 'react-router-dom'; // Import Link
import product from '../assets/product.jpeg';

function Home() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: '₹1500',
      imageUrl: product,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: '₹2000',
      imageUrl: product,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: '₹2500',
      imageUrl: product,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      price: '₹3000',
      imageUrl: product,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description for Product 5',
      price: '₹3500',
      imageUrl: product,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description for Product 6',
      price: '₹4000',
      imageUrl: product,
    },
  ];

  return (
    <div>
      <div className='navbar'>
        <Navbar />
      </div>
      <div style={{ marginTop: '64px' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom align="center">
            Welcome to Our Website
          </Typography>
          <Typography variant="h5" paragraph align="center">
            We provide amazing solutions for your needs.
          </Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                {/* Wrap the Card in a Link */}
                <Link to="/product" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      height="250"
                      image={product.imageUrl}
                    />
                    <CardContent>
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2">{product.description}</Typography>
                      <Typography variant="body2">{product.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
