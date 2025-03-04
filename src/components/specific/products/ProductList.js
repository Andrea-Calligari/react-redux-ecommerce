import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Button, Box, Container, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Cart from '../cart/Cart';
import CloseIcon from '@mui/icons-material/Close';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleProductDetails = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
      {products.map((product) => (
        <Box key={product.id} sx={{ width: { xs: '100%', sm: '48%', md: '30%' } }}>
          <Card sx={{ maxWidth: 345, height: 'auto', borderRadius: '14px' }}>
            <CardMedia
              component="img"
              height="200"
              image={product.img}
              alt={product.name}
            />
            <CardContent className='card-content-list'>
              <Typography variant="body1" fontWeight='bold' component="div">
                {product.name} -
              </Typography>
              <Typography variant="body1" fontWeight='bold' component="div">
                {product.model}
              </Typography>
            </CardContent>
            <Button
              onClick={() => handleProductDetails(product)}
              variant="contained"
              color='success'
              sx={{ margin: 1 }}
            >
              View Product
            </Button>
          </Card>
        </Box>
      ))}
      {selectedProduct && (
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>{selectedProduct.name} - {selectedProduct.model}</DialogTitle>
          <DialogContent>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Price: ${selectedProduct.price}
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
              {selectedProduct.description}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button startIcon={<CloseIcon />} variant='contained' onClick={handleCloseModal} color="error">
              Close

            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Cart />
    </Container>
  );
};

export default ProductList;
