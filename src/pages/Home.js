import Header from "../components/Header";
import HeroSlider from "../components/Home/HeroSlider";
import { useState } from "react";
function Home() {
  //overlay sorunu cozmek icin state buraya tasindi
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* conditional rendering */}
      {/* menuOpen === true ise → <div> render edilir
menuOpen === false ise → hiçbir şey render edilmez */}
{/* setMenuOpen(false) overlay a tiklanirsa menu kapanir */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0
        bg-[var(--black-alpha-80)]
        z-40"
        ></div>
      )}
      <HeroSlider />
    </>
  );
}

export default Home;
