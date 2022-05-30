/* IMPORT : LIBRARIES */
import { Route, Routes } from "react-router-dom";
/* IMPORT : COMPONENTS */
import Navbar from "./components/navbar/Navbar.comp";

/* IMPORT : ROUTES */
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
