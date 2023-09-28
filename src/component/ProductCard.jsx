import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions, IconButton, Stack } from "@mui/material";
import { RemoveCircleOutline } from "@mui/icons-material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
const ProductCard = ({
  name,
  image,
  quantity,
  price,
  handleQuantityInc,
  handleQuantityDec,
  handleAddToCart,
  id,
}) => {
  return (
    <Card sx={{ width: "350px", backgroundColor: "#e1bee7" }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={`/assets/${image}`}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "white" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="white">
            Price: ${price}
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          sx={{ bgcolor: "white", color: "#e1bee7", borderRadius: "10px" }}
        >
          <IconButton
            size="small"
            disabled={quantity === 0}
            onClick={() => handleQuantityDec(id)}
          >
            <RemoveCircleOutline color="warning" />
          </IconButton>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {quantity}
          </Typography>
          <IconButton size="small" onClick={() => handleQuantityInc(id)}>
            <ControlPointIcon color="success" />
          </IconButton>
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <Button
          variant="contained"
          sx={{
            width: "300px !important",
            backgroundColor: "#00acc1 ",
            "&:hover": { backgroundColor: "#00acc1" },
          }}
          onClick={()=>handleAddToCart(id)}
        >
          Add to Card
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
