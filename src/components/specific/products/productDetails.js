import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Box, Button, Typography } from '@mui/material';

const ProductDetails = () => {

  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === parseInt(id));
  const navigate = useNavigate();

  console.log(product)

  const goBack = () => {
    navigate(-1);
  }
  if (!product) {
    return <Typography variant="h6">Product not found</Typography>; 
  }

  return (
    <Container sx={{ padding: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={product.img} alt={product.name} style={{ width: '300px', height: 'auto' }} />
        <Typography variant="h4" sx={{ marginTop: 2 }}>
          {product.name} - {product.model}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 1 }}>
          Price: ${product.price}
        </Typography>
        <Typography sx={{ marginTop: 2 }}>{product.description}</Typography>
        <Button
          variant="contained"
          sx={{ marginTop: 3 }}
          onClick={goBack}
        >
          Go Back
        </Button>
      </Box>
    </Container>
  )
}

export default ProductDetails
