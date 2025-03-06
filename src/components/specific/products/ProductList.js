import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Button, Box, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid2 } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/products/components/cart/cartSlice';
import Cart from '../cart/Cart';
import CloseIcon from '@mui/icons-material/Close';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

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

  const handleAddToCart = ()=>{
    dispatch(addToCart());
  }

  return (
    <Container sx={{ width: '100%', padding: 4, overflowX: 'hidden'  }}>
      <Grid2 container spacing={2} justifyContent="center" alignItems='center'>
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ width: '100%', maxWidth: '300px',maxHeight:'80vh', borderRadius: '14px', cursor: 'pointer', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt={product.name}
              />
              <CardContent>
                <Typography  variant="body1" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography color='warning'  variant="body1" fontWeight="bold">
                  {product.model}
                </Typography>
              </CardContent>
              <Button
                onClick={() => handleProductDetails(product)}
                variant="contained"
                color="success"
                sx={{ margin: 1 }}
              >
                View Product
              </Button>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Modal per visualizzare i dettagli del prodotto */}
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
              ${selectedProduct.price}
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
              {selectedProduct.description}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button startIcon={<CloseIcon />} variant="contained" onClick={handleCloseModal} color="error">
              Close
            </Button>
             <Button  variant="contained" onClick={handleAddToCart} color="success">
              Add to cart 
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Cart />
    </Container>
  );
};

export default ProductList;
