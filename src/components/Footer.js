import { Link } from "react-router-dom";
import backPhoto from "../assets/img/footer-bg.jpg";
import logo from "../assets/img/logo.svg";
import pattern from "../assets/img/form-pattern.png";
export default function Footer() {
  return (
    <footer
      className="relative py-24 
    w-full 
    overflow-hidden
    px-4
    md:py-32
"
    >
      <img
        src={backPhoto}
        alt="footer backPhoto"
        className="
        absolute inset-0 
        w-full h-ful 
        object-cover
        object-center
        -z-10
        "
      />

      <img
        src={pattern}
        alt="pattern photo"
        className="absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 z-10
      bg-[var(--smoky-black-1)]"
      />

      <div
        className="
    absolute 
    z-20 
    top-1/2 
    left-1/2 
    -translate-x-1/2 
    -translate-y-1/2
    flex 
    flex-col 
    items-center 
    gap-4
  "
      >
        <Link to="/">
          <img src={logo} alt="Resto home" loading="lazy" />
        </Link>

        <address
          className="
      text-center
      text-[var(--quick-silver)]
      leading-[var(--lineHeight-3)]
      not-italic
    "
        >
          Restaurant Sk, Deniz City, Bursa 9578, Turkey
        </address>
      </div>
    </footer>
  );
}
