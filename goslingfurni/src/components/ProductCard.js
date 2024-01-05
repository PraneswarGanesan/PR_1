import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({ id, title, rate, image, onBuyNow }) => {
  return (
    <Card sx={{ maxWidth: 800, width: '300px' }}>
      <CardMedia
        sx={{ height: 160 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onBuyNow(id)}>
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
