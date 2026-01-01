import { Routes, Route } from "react-router-dom";

// TODO: Menu & Reservation will move into Home page as sections

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Menu />
              <Reservation />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
