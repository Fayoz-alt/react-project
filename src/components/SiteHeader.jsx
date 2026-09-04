import { Avatar, IconButton, Menu, MenuItem, Stack, Tooltip, Divider, ListItemIcon, TextField, InputAdornment } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from "react-router";
import { useAuth } from "./Auth";
import { deepOrange } from "@mui/material/colors";
import { useEffect, useState } from "react";
import React from "react";
import LogOutConfirm from "./LogOutConfirm";
import SearchIcon from '@mui/icons-material/Search';

function SiteHeader({ search, onSearchChange }) {
  const { accessToken, user } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openLogOut, setOpenLogOut] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setOpenLogOut(true)
  }

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: "1px solid #eeeeee",
        backgroundColor: "#fff",
      }}
    >
      <LogOutConfirm open={openLogOut} setOpenLogOut={setOpenLogOut} />
      <Toolbar
        sx={{
          height: 80,
          px: { xs: 2.5, md: 5 },
          justifyContent: "space-between",
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            gap: 1,
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemnJfS6fLmDnT9rMedVNHiPRp-Ur9kov8GsZnzLSpQQ&s=10"
            alt="Logo"
            style={{ maxWidth: "120px", width: "100%" }}
          />
        </Box>

        <Box
          component="nav"
          sx={{ display: { xs: "none", md: "flex" }, gap: 3, ml: 6 }}
          aria-label="Main navigation"
        >
          <TextField
            placeholder="Search destinations"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            size="medium"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}

            sx={{
              minWidth: { xs: "100%", sm: 600 },
              "& .MuiOutlinedInput-root": {
                borderRadius: 50,
                height: `50px`,
                backgroundColor: "#fff",
                boxShadow: "0 3px 10px rgba(0,0,0,0.07)",
              },
            }}
          />
        </Box>

        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          {!accessToken && (
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{
                borderColor: "#dddddd",
                color: "#555",
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: 700,
                border: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  borderRadius: "20px",
                  backgroundColor: "#f8f8f8",
                },
              }}
            >
              Log in or sign up
            </Button>
          )}

          {user && (
            <React.Fragment>
              <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32, bgcolor: deepOrange[500], cursor: "pointer" }}>
                      {user?.name?.slice(0, 1).toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}>
                    {user?.name?.slice(0, 1).toUpperCase()}
                  </Avatar> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default SiteHeader;