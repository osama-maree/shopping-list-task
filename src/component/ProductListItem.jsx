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

const ProductListItem = ({
  name,
  price,
  image,
  quantity,
  id,
  handleRemove,
}) => {
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
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleRemove(id)}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
const MemoizedComponent = React.memo(ProductListItem);
export default MemoizedComponent;
