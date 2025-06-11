import { LeftSide } from "./components";
import "./App.css";
<<<<<<< HEAD
=======
import HomePage from "./components/homePage/HomePage";
import { Box } from "@mui/material";
>>>>>>> 90630cf (push hompe page work)
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
<<<<<<< HEAD
      <div>Home Page</div>
      <div>Rightside</div>
    </div>
=======
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <HomePage />
      </Box>
      <Box>Rightside</Box>
    </Box>
>>>>>>> 90630cf (push hompe page work)
  );
}

export default App;
