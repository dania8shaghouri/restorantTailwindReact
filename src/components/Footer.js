import { Link } from "react-router-dom";
import backPhoto from "../assets/img/footer-bg.jpg";
import logo from "../assets/img/logo.svg";
import Button from "./Home/ui/Button";
export default function Footer() {
  return (
    <footer
      className="relative min-h-[100vh] 
         overflow-hidden
"
    >
      <img
        src={backPhoto}
        alt="footer backPhoto"
        className="
        absolute inset-0 
        w-full h-full
        object-cover
        object-center
        -z-10
        
        "
      />
      <div
        className="
    absolute
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    z-10
    h-[80%]
    w-[35%]
    px-10 py-12
    bg-[var(--smoky-black-1)]
    bg-[url('/form-pattern.png')]
    bg-top
    bg-repeat
  "
      ></div>

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
          mt-[4px]
          text-center
          text-[var(--quick-silver)]
          leading-[var(--lineHeight-3)]
          not-italic
          flex flex-col gap-2
  "
        >
          <span>Restaurant Sk, Deniz City, Bursa 9578, Turkey</span>
          <a href="mailto:lezzetg@restaurant.com">lezzetg@restaurant.com</a>
          <a href="tel:+905301118800">Booking Request : +90 530 111 88 00</a>
          <span>Open : 09:00 am - 01:00 pm</span>
        </address>
        <div className="flex items-center justify-center gap-3 my-5 rotate360">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 border border-[var(--gold-crayola)] rotate-45 animate-rotate360"
            />
          ))}
        </div>
        <address
          className="
          text-center
          not-italic
          font-forum
          text-[var(--white)]
  "
        >
          <p
            className="
            text-3xl
            leading-[var(--lineHeight-2)]
            "
          >
            Get News & Offers
          </p>
          <p className="text-[var(--quick-silver)]">
            Subscribe us & Get{" "}
            <span className="text-[var(--white)]">25% Off.</span>
          </p>
        </address>

        <form className="flex flex-row">
          <div className="relative flex-1">
            <ion-icon
              name="mail-outline"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-lg"
            ></ion-icon>
            <input
              type="email"
              name="email-address"
              placeholder="Your email"
              className="w-full px-6 py-3 pl-10
                bg-[var(--smoky-black-1)]
                border border-[var(--white-alpha-20)] text-white"
            />
          </div>
          <Button
            href="#"
            text="Subscribe"
            className="px-6 py-2
             transition-colors
                    duration-1000
                    ease-out bg-[var(--gold-crayola)]
                    text-[var(--smoky-black-1)]
                    font-medium
                  "
          />
        </form>
      </div>
    </footer>
  );
}
