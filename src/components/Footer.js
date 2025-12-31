import { Link } from "react-router-dom";
import backPhoto from "../assets/img/footer-bg.jpg";
import logo from "../assets/img/logo.svg";
import Button from "./Home/ui/Button";
import { FooterLinks, mediaLinks } from "../data/FooterLinks";

export default function Footer() {
  return (
    <footer id="contact" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={backPhoto}
        alt="footer background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Grid Container */}
      <div
        className="
          relative z-10
          grid grid-cols-2 gap-y-12 gap-x-8
          md:grid-cols-2
          lg:grid-cols-3 
          w-full
          lg:min-w-full lg:max-h-[100vh]
           md:max-w-3xl
          mx-auto
          py-20 
          text-[var(--quick-silver)]
          text-sm uppercase 
          
        "
      >
        {/* BRAND — grid-column: 1 / 3 */}
        <div
          className="
            col-span-2 md:col-span-2
            lg:col-span-1 lg:col-start-2
            order-1 lg:order-2
            flex flex-col items-center text-center gap-4
            bg-[var(--smoky-black-1)]
            bg-[url('/form-pattern.png')]
            bg-top bg-repeat
            px-10 py-14
            
          "
        >
          <Link to="/">
            <img src={logo} alt="Resto home" loading="lazy" />
          </Link>

          <address className="not-italic flex flex-col gap-3 mt-5">
            <span>Restaurant Sk, Deniz City, Bursa 9578, Turkey</span>
            <a href="mailto:lezzetg@restaurant.com">lezzetg@restaurant.com</a>
            <a href="tel:+905301118800">Booking Request : +90 530 111 88 00</a>
            <span>Open : 09:00 am - 01:00 pm</span>
          </address>

          {/* separator */}
          <div className="flex gap-3 my-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 border border-[var(--gold-crayola)] rotate-45"
              />
            ))}
          </div>

          <div className="font-forum text-[var(--white)] mb-7">
            <p className="text-3xl">Get News & Offers</p>
            <p className="text-[var(--quick-silver)]">
              Subscribe us & Get{" "}
              <span className="text-[var(--white)]">25% Off.</span>
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col sm:flex-row w-full max-w-md mb-5 gap-5 md:gap-0">
            <div className="relative flex-1 ">
              <ion-icon
                name="mail-outline"
                className="absolute text-xl left-3 top-1/2 -translate-y-1/2 text-white"
              />
              <input
                type="email"
                placeholder="Your email"
                className="
                  w-full px-5 py-5 pl-10
                  bg-[var(--smoky-black-1)]
                  border border-[var(--white-alpha-20)]
                  text-white 
                "
              />
            </div>
            <Button
              text="Subscribe"
              className="w-full sm:w-auto
              
                px-5 py-5 
                bg-[var(--gold-crayola)]
                text-[var(--smoky-black-1)]
                transition-colors
              "
            />
          </form>
        </div>

        {/* FOOTER LINKS */}
        <ul
          className="col-span-2 md:col-span-1
          lg:col-span-1 lg:col-start-1
          order-2 lg:order-1 lg:mt-[140px]
          flex flex-col gap-9 text-center
          
          "
        >
          {FooterLinks.map((item, index) => (
            <li
              className="
              text-xs 
              font-[var(--weight-bold)]
              tracking-[var(--letterSpacing-4)]
              "
              key={index}
            >
              <Link to={item.to} className="hover:text-[var(--gold-crayola)]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* SOCIAL LINKS */}
        <ul
          className="col-span-2 md:col-span-1 
          lg:col-span-1 lg:col-start-3
          order-3 lg:mt-[140px]
          flex flex-col gap-9 text-center"
        >
          {mediaLinks.map((item, index) => (
            <li
              className="
              text-xs 
              font-[var(--weight-bold)]
              tracking-[var(--letterSpacing-4)]"
              key={index}
            >
              {/* <a
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--quick-silver)] 
                hover:text-[var(--gold-crayola)]
                "
              >
                {item.label}
              </a> */}
              <Link
                to={item.to}
                className="
              hover:text-[var(--gold-crayola)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-10 text-center">
        <p className="text-m text-[var(--quick-silver)]">
          &copy; 2022 Lezzet. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
