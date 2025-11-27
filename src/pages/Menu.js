import MenuItems from "../components/menu/MenuItems";
import { menuData } from "../data/menuData";

function Menu() {
  return (
    <section className="">
      {menuData.map((item, index) => (
        <MenuItems key={index} item={item} />
      ))}
    </section>
  );
}

export default Menu;
