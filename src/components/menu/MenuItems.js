import ButtonMenu from "../Home/ui/ButtonMenu";
export default function MenuItems({ item }) {
  return (
    <div>
      <img src={item.img} alt={item.title} />

      <h3>{item.title}</h3>

      <h3>{item.price}</h3>

      <p>{item.description}</p>

      <ButtonMenu
        href="#"
        text="order"
        className={` duration-700 delay-700  `}
      />
    </div>
  );
}
