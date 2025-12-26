import { Routes, Route } from "react-router-dom";

// TODO: Menu & Reservation will move into Home page as sections

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Menu />
      <Reservation />
      <Footer />
    </>
  );
}

export default App;
