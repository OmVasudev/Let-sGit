"use client";
import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
// import Logo from "../../public/Logo.png"; // Ensure Logo.png is in the public folder

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Clubs", path: "/clubs" },
  { label: "About Us", path: "/aboutus" },
  { label: "Contact", path: "/contact" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Project Artha
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              {Array.isArray(item.submenus) ? (
                <Box>
                  <ListItemText primary={item.label} />
                  <List>
                    {item.submenus.map((submenu) => (
                      <ListItem key={submenu} disablePadding>
                        <ListItemButton>
                          <Link
                            href={`${item.path}/${submenu
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            passHref
                          >
                            <ListItemText primary={submenu} />
                          </Link>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ) : (
                <Link href={item.path} passHref>
                  <ListItemText primary={item.label} />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "75px" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#FFEBD8" }}>
        <Toolbar className="toolbarContainer">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Image src={Logo} alt="logo" width={50} height={50} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              pr: 5,
              py: 2,
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "Dancing Script",
              fontSize: 40,
              fontWeight: 700,
              color: "#482D2D",
              textDecoration: "none",
            }}
          >
            PointQuest
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.path}
                sx={{
                  color: "#482D2D",
                  margin: "3px",
                  "&:hover": {
                    color: "#679BFF",
                  },
                  fontFamily: "Poppins",
                  fontWeight: "semibold",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="inherit"
            component={Link}
            href="/login"
            sx={{
              backgroundColor: "transparent",
              color: "#679BFF",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              padding: "10px 20px",
              backgroundColor: "#fff",
              transition: "background-color 0.3s, color 0.3s",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#1F0954",
              },
              "&:focus": {
                outline: "none",
              },
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            Login / Register
          </Button>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
