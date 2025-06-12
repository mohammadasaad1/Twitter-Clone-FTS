import { LeftSide } from "./components";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import { Box } from "@mui/material";
import RightSidebar from "./components/rightSideBar/RightSidebar";
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
      <Box
        sx={{
          py: 2,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <RightSidebar />
      </Box>
    </Box>
  );
}

export default App;
