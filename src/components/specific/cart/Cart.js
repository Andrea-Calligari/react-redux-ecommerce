import React, { useState } from "react";
import { Drawer, Box, Typography, Button, List, ListItem, ListItemText, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <>

      <Button
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "rgba(8, 8, 8, 0.4)",
          color: "white",
          borderRadius: "999px",
          width: "50px",
          height: "50px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          ":hover": {
            backgroundColor: "#2980b9",
          },
        }}
        onClick={() => toggleDrawer(true)}
      >
        <ShoppingCartIcon />
      </Button>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 345, height: '100vh', padding: "20px", backgroundColor: "#34495e", color: "whitesmoke", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>Your Cart</Typography>
          <Divider sx={{ marginBottom: "20px" }} />
          <List>
            {cartItems.map((item, index) => (
              <ListItem key={index} sx={{ padding: "10px 0" }}>
                <ListItemText
                  primary={item.name}
                  secondary={`Quantity: ${item.quantity} | $${item.price * item.quantity}`}
                  sx={{ color: "whitesmoke" }}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ marginBottom: "20px" }} />
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#2980b9",
              ":hover": {
                backgroundColor: "#1f6f91",
              },
              borderRadius: "14px",
              padding: "10px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => navigate('/checkout')}

          >
            Checkout
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
