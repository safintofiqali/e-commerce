import { Route, Router, Routes } from "react-router-dom";
import Directory from "./components/directory/Directory.comp";
import Navbar from "./components/navbar/Navbar.comp";
import SignIn from "./components/sing-in/SignIn.comp";
import Home from "./routes/home/Home";
const ErrorPage = () => {
  return (
    <div>
      <h2>404 Not Found !</h2>
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <h2>Hello I am SHOP PAGE</h2>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
