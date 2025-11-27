import MenuItems from "../components/menu/MenuItems";
import { menuData } from "../data/menuData";
// img
import shape1 from "../assets/img/shape-4.png";
import shape2 from "../assets/img/shape-5.png";
function Menu() {
  return (
    <section className="bg-[var(--eerie-black-1)]">
      <img src={shape1} />
      <img src={shape2} />
      {menuData.map((item, index) => (
        <MenuItems key={index} item={item} />
      ))}
    </section>
  );
}

export default Menu;
