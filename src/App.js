import { LeftSide } from "./components";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
function App() {
  return (
    <div className="app">
      <LeftSide />
      <HomePage />
      <div>Rightside</div>
    </div>
  );
}

export default App;
