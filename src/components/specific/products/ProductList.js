import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Button, Box, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, Pagination } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/products/components/cart/cartSlice';
import Cart from '../cart/Cart';
import CloseIcon from '@mui/icons-material/Close';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();


  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleProductDetails = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setOpenModal(false);
  };


  const handlePageChange = (e, value) => {
    e.preventDefault();
    setCurrentPage(value);
  };

  return (


    <Container sx={{ maxWidth: '100%', maxHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'start', paddingTop: '24px' }}>
      <Grid2 container spacing={2} justifyContent="center" alignItems='center'>
        {currentProducts.map((product) => (
          <Grid2  xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ width: '300px', borderRadius: '14px', cursor: 'pointer', boxShadow: '2px 4px 12px 2px green', }}>
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="body1" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography color='warning' variant="body1" fontWeight="bold">
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

      {/* Paginate Component */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4, }}>
        <Pagination
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'black',
              backgroundColor: 'whitesmoke',
              '&:hover': {
                backgroundColor: '#66bbe0',
              },
              '&.Mui-selected': {
                backgroundColor: '#2980b9',
                color: 'white',
              },
            },
          }}
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}

        />
      </Box>

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
            <Button variant="contained" onClick={() => handleAddToCart(selectedProduct)} color="success">
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
