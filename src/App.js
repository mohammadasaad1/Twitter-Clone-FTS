import { LeftSide } from "./components";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import { Box } from "@mui/material";
function App() {
  return (
    <Box
      className="app"
      sx={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <LeftSide />
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <HomePage />
      </Box>
      <Box>Rightside</Box>
    </Box>
  );
}

export default App;
