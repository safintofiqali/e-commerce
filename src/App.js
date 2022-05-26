import { Route, Router, Routes } from "react-router-dom";
import Directory from "./components/directory/Directory.comp";
import Home from "./routes/home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
