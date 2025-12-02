import MenuItems from "../components/menu/MenuItems";

// img
import shape1 from "../assets/img/shape-6.png";
import shape2 from "../assets/img/shape-5.png";
import separator from "../assets/img/separator.svg";
function Menu() {
  return (
    <section className=" relative min-h-screen bg-[var(--eerie-black-1)] ">
      <p
        className={`relative z-10 text-xs text-center py-10 font-bold uppercase tracking-[var(--letterSpacing-2)] text-[var(--gold-crayola)] 
          `}
      >
        Special Selection
        <img src={separator} alt="" className="block w-[100px] mx-auto py-4" />
      </p>
      <h2
        className="my-5 text-center
    text-[var(--white)]             
    text-[length:var(--fontSize-headline-1)] 
    font-[length:var(--fontFamily-forum)]   
    font-[var(--weight-regular)]     
    leading-[var(--lineHeight-2)]  
    relative z-10 
  "
      >
        Delicious Menu
      </h2>

      <div className=" absolute inset-0 z-0 pointer-events-none animate-moveAnim">
        <img
          className="absolute w-[65%px] h-auto bottom-0 right-0 "
          src={shape1}
          loading="lazy"
          alt="shape1"
        />
        <img
          className="absolute w-[65%] h-auto top-0 left-0"
          src={shape2}
          loading="lazy"
          alt="shape2"
        />
      </div>

      <MenuItems />
      <p
        className="relative z-10 text-center my-7 
      text-[length:var(--fontSize-body-4)]
      text-[var(--white)]"
      >
        During winter daily from{" "}
        <span className="text-[var(--gold-crayola)]">7:00 pm</span> to{" "}
        <span className="text-[var(--gold-crayola)]">9:00 pm</span>
      </p>
    </section>
  );
}

export default Menu;
