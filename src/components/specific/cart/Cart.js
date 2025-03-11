import React, { useState } from "react";
import { Drawer, Box, Typography, Button, List, ListItem, } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../../../features/products/components/cart/cartSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id)); // Rimuovi il prodotto dal carrello
  };

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckOut = async () => {
    try {
      console.log("Sending the following items to backend:", JSON.stringify(cart.items, null, 2));

      // Assicurati di inviare un formato semplice, senza `price_data`
      const itemsToSend = cart.items.map(item => ({
        id: item.id,
        name: item.name,
        image: item.img,
        price: parseFloat(item.price), // Assicurati che sia un numero valido
        quantity: item.quantity
      }));

      console.log("Items sent to backend:", JSON.stringify(itemsToSend, null, 2));

      const response = await axios.post('http://localhost:4242/create-checkout-session', {
        items: itemsToSend, // Ora inviamo il formato corretto
      });

      if (!response.data || !response.data.url) {
        throw new Error('Failed to create checkout session, URL not returned.');
      }

      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error during checkout", error);
      alert("Errore durante il checkout: " + error.message);
    }
  };


  return (
    <>
      <Button
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "white",
          color: "black",
          width: '50px',
          height: '60px',
          borderRadius: '50%',
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ":hover": {
            backgroundColor: "#2980b9",
          },
        }}
        onClick={() => toggleDrawer(true)}
      >
        <ShoppingCartIcon />
      </Button>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)} sx={{
        '&[aria-hidden="true"]': {
          pointerEvents: 'none',  // Disabilita l'interazione con gli elementi all'interno del drawer quando è nascosto
        }
      }} >
        <Box sx={{ minWidth: '500px', padding: 5, display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column', height: '100vh', backgroundColor: '#020203f3', color: 'whitesmoke' }}>
          <Typography variant="h4" sx={{ marginBottom: 2, }}>Shopping Cart</Typography>
          {cart.totalQuantity === 0 ? (
            <Typography fontSize='30px'>Empty Cart</Typography>
          ) : (
            <List>
              {cart.items.map((item) => (
                <ListItem key={item.id} sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', width: '100%', justifySelf: 'start' }}>
                    <div className=" cart-item  ">
                      <Typography variant="body1" sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name} </Typography>
                      <Typography> x {item.quantity}</Typography>
                      <Typography >${item.price * item.quantity}</Typography>
                      <Button
                        onClick={() => handleRemoveItem(item.id)}
                        color="error"
                        variant="outlined"
                      >
                        X
                      </Button>
                    </div>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}
          <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', gap: 3 }}>
            <Typography variant="h6">Total: ${cart.totalPrice.toFixed(2)}</Typography>
            <div className="flex gap-2">
              <Button onClick={handleCheckOut} variant="contained" color="success">Checkout</Button>
              <Button onClick={handleClearCart} variant="contained" color="error">Clear</Button>
            </div>
          </Box>
        </Box>
      </Drawer >
    </>
  );
};

export default Cart;
