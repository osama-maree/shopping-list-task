import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductCard = ({ name, image, price }) => {
  return (
    <Card sx={{ width: "350px" }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={`/assets/${image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
