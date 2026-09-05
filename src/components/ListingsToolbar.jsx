import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link } from "react-router";
import { useAuth } from "./Auth";

function ListingsToolbar() {
  const { accessToken } = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        mb: 5,
        flexWrap: "wrap",
      }}
    >
      <Box
        component={Link}
        to={!accessToken ? "/login" : "/favorites"}
        sx={{
          width: {
            xs: "100%",
            sm: "200px",
          },
          height: "100px",
          borderRadius: "20px",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          textDecoration: "none",
          color: "#222",
          transition: "0.25s",
        }}
      >
        <Stack>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
            }}
          >
            🧡Favorites
          </Typography>
        </Stack>
      </Box>

      <Box
        component={Link}
        to={!accessToken ? "/login" : "/bookings"}
        sx={{
          width: {
            xs: "100%",
            sm: "200px",
          },
          height: "100px",
          borderRadius: "20px",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          textDecoration: "none",
          color: "#222",

          transition: "0.25s",
        }}
      >
        <Stack>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
            }}
          >
            📚 Bookings
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default ListingsToolbar;
