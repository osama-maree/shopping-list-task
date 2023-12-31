import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: "#00acc1 !important" }}>
        <Toolbar disableGutters>
          <Tooltip title="Main Page">
            <IconButton sx={{ pr: "5px", ml: ".5%" }}>
              <Avatar alt="logo" src="/assets/logo1.png" />
            </IconButton>
          </Tooltip>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            Shopping-Card
          </Typography>
          <Box sx={{ flexGrow: 0, mr: "2%" }}>
            <Link to="/order">
              <Tooltip title="Open ">
                <IconButton
                  sx={{
                    padding: "10px",
                    "&:hover": {
                      border: "1px solid white",
                    },
                  }}
                >
                  <ShoppingCartIcon
                    sx={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
