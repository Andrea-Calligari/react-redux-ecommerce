import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{width: '100%', borderRadius:'0px 0px 14px 14px ', backgroundColor: "#3a4f50", boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", height:'auto', marginBottom:'100px' }}>
      <Toolbar>
        <Box sx={{ display: "flex",alignItems:'center', padding:'12px', justifyContent: "space-between", width: "100%" }}>
          <Typography variant="h6" sx={{ color: "whitesmoke",  }}>
            E-COMMERCE-SHOP
          </Typography>
          <Box>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "whitesmoke",
                // backgroundColor: "#114b72",
                borderRadius: "14px",
                padding: "10px 20px",
                textDecoration: "none",
                transition: "background-color 0.3s",
                ":hover": {
                  backgroundColor: "#2980b9",
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/products"
              sx={{
                color: "whitesmoke",
                // backgroundColor: "#114b72",
                borderRadius: "14px",
                padding: "10px 20px",
                textDecoration: "none",
                marginLeft: "15px",
                transition: "background-color 0.3s",
                ":hover": {
                  backgroundColor: "#2980b9",
                },
              }}
            >
              Products
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
