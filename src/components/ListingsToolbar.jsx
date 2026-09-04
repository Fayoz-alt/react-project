import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function ListingsToolbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 3,
        mb: 4,
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Typography
          variant="overline"
          sx={{
            color: "#ff385c",
            display: "block",
            fontWeight: 800,
            letterSpacing: 1.4,
            mb: 1,
          }}
        >
          Find your next stay
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            letterSpacing: "-0.06em",
            lineHeight: 1.1,
            fontWeight: 800,
            maxWidth: 540,
          }}
        >
          Stay somewhere memorable
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#717171", mt: 1.5, fontSize: "1rem" }}
        >
          Browse homes made for every kind of trip.
        </Typography>
      </Box>
    </Box>
  );
}

export default ListingsToolbar;
