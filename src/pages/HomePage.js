import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container sx={{ backgroundColor: '#1b2223', color: 'whitesmoke', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', paddingTop: '5rem' }}>
      <Box mb={4}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to Our E-Commerce Store!
        </Typography>
        <Typography variant="h6" sx={{ color: '#B0BEC5' }}>
          Shop the latest trends and best deals today
        </Typography>
      </Box>
      <Box mb={6}>
        <Typography variant="h4" sx={{ color: '#ECEFF1' }} fontWeight="medium" gutterBottom>
          Discover a wide variety of products at unbeatable prices.
        </Typography>
        <Typography variant="body1" sx={{ color: '#B0BEC5', maxWidth: '800px', margin: '0 auto' }}>
          Whether you're looking for fashion, electronics, or home essentials, we have something for everyone.
          Shop now and enjoy the best deals in the market.
        </Typography>
      </Box>
      <Box>
        <Link to="/products">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#114b72',
              color: 'white',
              padding: '10px 20px',
              fontSize: '1.25rem',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#2980b9',
              },
            }}
          >
            Start Shopping
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
