import ButtonMenu from "../Home/ui/ButtonMenu";
export default function MenuItems({ item }) {
  return (
    <section>
      <div className=" flex items-start gap-5">
        <img
          className="rounded-[var(--radius-24)]
          "
          src={item.img}
          alt={item.title}
        />

        <div className="px-4">
          <h3
            className="text-[var(--white)]  
          font-[var(--weight-regular)] 
          leading-[var(--lineHeight-2)]"
          >
            {item.title}
          </h3>

          <h3
            className="text-[var(--gold-crayola)] 
          float-right my-2.5"
          >
            {item.price}
          </h3>

          <p
            className="text-[var(--quick-silver)]
          leading-[var(--lineHeight-4)]"
          >
            {item.description}
          </p>
        </div>
      </div>
      <ButtonMenu href="#" text="order" />
    </section>
  );
}
