import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  List,
  ListItemSecondaryAction,
  ImageListItem,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductListItem = ({ name, price, image, quantity }) => {
  return (
    <List
      sx={{
        bgcolor: "#e1bee7",
        marginBottom: 3,
        padding: 0,
        borderRadius: "7px",
        color: "#00acc1",
      }}
    >
      <ListItem>
        <ImageListItem
          sx={{
            width: "110px",
            mr: "1rem",
          }}
        >
          <img
            src={`/assets/${image}`}
            alt={name}
            sx={{ borderRadius: "100px !important" }}
            loading="lazy"
          />
        </ImageListItem>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              Price: ${price} | Quantity: {quantity}
              <Typography sx={{}}>Total Price:{quantity * price}$</Typography>
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon color="error" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default ProductListItem;
