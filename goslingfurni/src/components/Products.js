  // Products.js

  import React, { useState, useEffect } from 'react';
  import Navbar from './Navbar';
  import Footer from './Footer';
  import ProductCard from './ProductCard';
  import axios from 'axios';
  import '../styles/Products.css';
  import { Grid, Snackbar, Button, Typography } from '@mui/material';

  function Products({ addToCart }) {
    const [products, setProducts] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
      axios.get('http://localhost:3001/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };

    return (
      <div className='Products'>
        <Navbar />
        <div className='products'>
          <div className='products-content'>
            <Typography variant="h4">Products</Typography>
            <br></br>
            <Grid container spacing={3}>
              {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    rate={product.rate}
                    image={product.image}
                    onBuyNow={() => {
                      addToCart(product);
                      setSnackbarOpen(true);
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            message="Added to Cart!"
          />
        </div>
        <Footer />
      </div>
    );
  }

  export default Products;
