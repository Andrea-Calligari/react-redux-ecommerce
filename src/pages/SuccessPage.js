import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box, CircularProgress, Button } from '@mui/material';

const SuccessPage = () => {
  const [session, setSession] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // Recupera i dettagli della sessione di checkout da Stripe
      axios.get(`http://localhost:4242/checkout-session/${sessionId}`)
        .then(response => {
          setSession(response.data);
        })
        .catch(error => {
          console.error('Error fetching session:', error);
        });
    }
  }, [sessionId]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="h3" gutterBottom>
          Thank you for your purchase!
        </Typography>
        {session ? (
          <Box>
            <Typography variant="h5" gutterBottom>
              Payment Successful!
            </Typography>
            <Typography variant="body1">
              <strong>Session ID:</strong> {session.id}
            </Typography>
            <Typography variant="body1">
              <strong>Total Amount:</strong> €{(session.amount_total / 100).toFixed(2)}
            </Typography>
            <Typography variant="body1" paragraph>
              Your order will be processed shortly. We will notify you once it's ready.
            </Typography>
            <Button variant="contained" color="primary" href="/">
              Go to Home
            </Button>
          </Box>
        ) : (
          <Box>
            <CircularProgress />
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Loading session details...
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default SuccessPage;
