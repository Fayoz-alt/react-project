import PaginationMui from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  return (
    <Stack
      direction="row"
      sx={{ mt: 5, justifyContent: "center" }}
    >
      <PaginationMui
        count={totalPages}
        page={currentPage - 1}
        onChange={(_, page) => onPageChange(page + 1)}
        color="standard"
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: "50%",
            border: "1px solid #dddddd",
            color: "#222",
            fontWeight: 600,
          },
          "& .Mui-selected": {
            backgroundColor: "#222",
            color: "#fff",
            borderColor: "#222",
          },
          "& .Mui-selected:hover": {
            backgroundColor: "#000",
            borderColor: "#000",
          },
        }}
      />
    </Stack>
  );
}

export default Pagination;
