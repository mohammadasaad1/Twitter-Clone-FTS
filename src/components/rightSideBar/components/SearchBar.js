import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";
export default function SearchBar() {
  return (
    <TextField
      label="Search"
      id="outlined-size-small"
      size="small"
      color="info"
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "#888  ",
          }}
        >
          <SearchIcon />
          Search
        </Box>
      }
      sx={{
        width: "90%",
        backgroundColor: "#181A1E",
        borderRadius: 50,

        "& input": { color: "#FFF" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "transparent", borderRadius: "12px" },
          "&:hover fieldset": { borderColor: "transparent" },
          "&.Mui-focused fieldset": { borderColor: "#1976d2" },
        },
      }}
    />
  );
}
