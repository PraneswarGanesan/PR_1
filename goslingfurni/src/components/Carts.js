import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../styles/Carts.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';

function Carts({ cart, removeFromCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate total when the cart changes
    const newTotal = cart.reduce((acc, item) => acc + parseFloat(item.rate.replace('$', '').replace(',', '')), 0);
    setTotal(newTotal);
  }, [cart]);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <Navbar />
      <div className='Carts'>
        <div className='carts'>
          <div className='cart-items'>
            <div className='lolcarthead'>
            <Typography variant="h4">Shopping Cart</Typography>
            </div>
            {cart.length === 0 ? (
              <Typography variant="body1"  className='lolcarthead2'>
                Your cart is empty.
                <br />
                <Link  to="/products"  className='lolcarthead2'>Add items to your cart <ArrowForwardIcon className='arrow1'/></Link>
              </Typography>
           
            ) : (
              <div>
                <Grid container spacing={3} className='cartitemcards'>
                  {cart.map(item => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                      <Card className='carditem'>
                        <CardMedia
                          component="img"
                          alt={item.title}
                          height="140"
                          image={item.image}
                        />
                        <div className='card-content1'>

                        <CardContent className='card-con01'>
                          <Typography variant="body1">{item.title}</Typography>
                          <Typography variant="body1">{item.rate}</Typography>
                        </CardContent>
                          <CardActions className='card-action01'>
                          <Button onClick={() => handleRemove(item.id)}>
                           <CloseIcon />
                          </Button>
                        </CardActions>
                        </div>
                        
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Typography variant="h6" className='totalbilling1'>Total: ${total.toFixed(2)}</Typography>
                <Button variant="contained" color="primary" className='buynow1'>
                  Buy Now
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Carts;
