import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

function SiteHeader() {
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
            alt=""
            style={{ maxWidth: `120px`, width: `100%` }}
          />
        </Box>

        <Box
          component="nav"
          sx={{ display: { xs: "none", md: "flex" }, gap: 3, ml: 6 }}
          aria-label="Main navigation"
        >
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ color: "#555", fontWeight: 600, textTransform: "none" }}
          >
            Explore stays
          </Button>
          <Button
            component={Link}
            to="/register"
            color="inherit"
            sx={{ color: "#555", fontWeight: 600, textTransform: "none" }}
          >
            Become a host
          </Button>
        </Box>

        <Button
          component={Link}
          to="/register"
          variant="outlined"
          sx={{
            borderColor: "#dddddd",
            color: "#555",
            borderRadius: `20px`,
            textTransform: "none",
            fontWeight: 700,
            border: `none`,
            backgroundColor: `transparent`,
            "&:hover": {
              borderRadius: `20px`,
              backgroundColor: `#f8f8f8`,
            },
          }}
        >
          Log in or sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default SiteHeader;
