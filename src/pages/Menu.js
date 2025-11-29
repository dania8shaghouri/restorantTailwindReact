import MenuItems from "../components/menu/MenuItems";

// img
import shape1 from "../assets/img/shape-4.png";
import shape2 from "../assets/img/shape-5.png";
import separator from "../assets/img/separator.svg";
function Menu() {
  return (
    <section className="bg-[var(--eerie-black-1)]">
      <p
        className={`text-xs text-center py-10 font-bold uppercase tracking-[var(--letterSpacing-2)] text-[var(--gold-crayola)] 
          `}
      >
        Special Selection
        <img src={separator} alt="" className="block w-[100px] mx-auto py-4" />
      </p>
      <h2
        className="my-5 text-center
    text-[var(--white)]             
    text-[length:var(--fontSize-headline-1)] 
    font-[var(--fontFamily-forum)]   
    font-[var(--weight-regular)]     
    leading-[var(--lineHeight-2)]   
  "
      >
        Delicious Menu
      </h2>

      <div className="hidden absolute max-w-max -z-[1]">
        <img
          className="block w-[70%] top-0 left-0"
          src={shape1}
          loading="lazy"
          alt="shape1"
        />
        <img
          className="block w-[70%] bottom-0 right-0"
          src={shape2}
          loading="lazy"
          alt="shape2"
        />
      </div>

      <MenuItems />

      <p
        className="text-center my-9 
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

// .shape {
//   display: none;
//   position: absolute;
//   max-width: max-content;
//   z-index: -1;
// }
// .menu .shape {
//   display: block;
//   width: 70%;
// }

// .menu .shape-2 {
//   top: 0;
//   left: 0;
// }

// .menu .shape-3 {
//   bottom: 0;
//   right: 0;
// }
// .move-anim {
//   animation: move 5s linear infinite;
// }

// @keyframes move {

//   0%,
//   100% {
//     transform: translateY(0);
//   }

//   50% {
//     transform: translateY(30px);
//   }
// }

export default Menu;
