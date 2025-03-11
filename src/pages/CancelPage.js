import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const CancelPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="h3" gutterBottom>
          Payment Canceled
        </Typography>
        <Typography variant="body1" paragraph>
          We're sorry, but your payment was not completed. If you want, you can try again or contact support.
        </Typography>
        <Button variant="outlined" color="secondary" sx={{ marginTop: 2 }} href="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default CancelPage;
