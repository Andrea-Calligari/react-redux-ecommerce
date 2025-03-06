import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';

const NavBar = () => {
    return (
        <AppBar
            position="static"
            sx={{
                maxWidth: '100%', // Impedisce l'overflow della AppBar
                borderRadius: '0px 0px 14px 14px',
                backgroundColor: "black",
                boxShadow: "0px 4px 15px white",
                overflowX: 'hidden', // Aggiungi questa proprietà per prevenire l'overflow orizzontale
            }}
        >
            <Toolbar>
                <Box sx={{ display: "flex", alignItems: 'center', padding: '12px', justifyContent: "space-between", width: "100%" }}>
                    <Button component={Link} to="/" startIcon={<SnowshoeingIcon />} sx={{ color: "whitesmoke" }}>
                        NIKE-SHOP
                    </Button>
                    <Box>
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                color: "whitesmoke",
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
