import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/img/logo.svg";
import Button from "./Home/ui/Button";

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  //   scroll yukari 50 cekildi mi diye kontrol eder (headere bg eklemek icin)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   section %25 olarak ekranda gorunuyorsa onu active yap
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], footer[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const activeLinkClass = `
  relative
  text-[var(--gold-crayola)]
  after:content-['']
  after:absolute after:left-0 after:-bottom-2
  after:w-full after:border-b-2 after:border-[var(--gold-crayola)]

  before:content-['']
  before:absolute before:left-0 before:-bottom-4
  before:w-full before:border-b-2 before:border-[var(--gold-crayola)]
`;

  const navItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300 border-b
    ${
      scrolled
        ? "py-1 bg-[var(--eerie-black-4)] border-[var(--black-alpha-15)]"
        : "py-10 bg-transparent border-transparent"
    }
  `}
    >
      <div className="flex items-center justify-between  px-5 py-6 ">
        {/* logo */}
        <a href="#home">
          <img rel="preload" src={logo} alt="lezzet"></img>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-white">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  activeSection === item.id
                    ? activeLinkClass
                    : "hover:text-[var(--gold-crayola)]"
                }
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-[var(--gold-crayola)]"
                  : "hover:text-[var(--gold-crayola)]"
              }
            >
              Register
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-[var(--gold-crayola)]"
                  : "hover:text-[var(--gold-crayola)]"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>

        {/* open button mobile */}
        <button onClick={() => setMenuOpen(true)} className="lg:hidden ">
          <span className="block w-7 h-[2px] bg-white mb-1 origin-left animate-menuBtn [animation-delay:10ms]"></span>
          <span className="block w-7 h-[2px] bg-white mb-1 origin-left animate-menuBtn [animation-delay:150ms]"></span>
          <span className="block w-7 h-[2px] bg-white mb-1 origin-left animate-menuBtn [animation-delay:300ms]"></span>
        </button>

        {/* navbar */}
        <nav
          className={`mobile-menu py-10
  fixed top-0 left-0
  h-screen w-80
  bg-[var(--smoky-black-1)]
  transform transition-transform duration-300
  overflow-y-auto
  z-50
  ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <a
            onClick={() => setMenuOpen(false)}
            href="#home"
            className="flex items-center justify-center my-7 "
          >
            <img rel="preload" src={logo} alt="lezzet"></img>
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white
           w-7 h-7 border rounded-full"
          >
            ✕
          </button>
          {/* [&>li]  su demek oluyor ul > li { ... }
           */}
          <ul
            className="
         text-white mt-10 mx-9 

           [&>li]:relative
           [&>li]:flex
           [&>li]:items-start
           [&>li]:gap-3
           [&>li]:py-3
           [&>li]:border-t
           [&>li]:border-[var(--white-alpha-20)]
           [&>li]:w-[200px]
       
           /* before default (gizli) */
           [&>li::before]:content-['']
           [&>li::before]:mt-2
           [&>li::before]:w-2
           [&>li::before]:h-2
           [&>li::before]:border
           [&>li::before]:border-[var(--gold-crayola)]
           [&>li::before]:rotate-45
           [&>li::before]:opacity-0
           [&>li::before]:scale-0
           [&>li::before]:transition-all
           [&>li::before]:duration-300
       
           /* hover olunca */
           [&>li:hover::before]:opacity-100
           [&>li:hover::before]:scale-100
       
           /* active (NavLink kullanıyorsan) */
           [&>li.active::before]:opacity-100
           [&>li.active::before]:scale-100

           /* a default */
           [&>li>a]:transition-all
           [&>li>a]:duration-300
       
           /* hover → a */
           [&>li:hover>a]:text-[var(--gold-crayola)]
           [&>li:hover>a]:translate-x-5
       
           [&>li.active>a]:text-[var(--gold-crayola)]
           [&>li.active>a]:translate-x-5
  "
          >
            <li
              className={`py-3 border-t border-[var(--white-alpha-20)] w-[200px]
            ${activeSection === "home" ? "active" : ""}`}
            >
              <a href="#home">Home</a>
            </li>

            <li
              className={`py-3 border-t border-[var(--white-alpha-20)] w-[200px]
            ${activeSection === "menu" ? "active" : ""}`}
            >
              <a href="#menu">Menu</a>
            </li>

            <li
              className={`py-3 border-t border-[var(--white-alpha-20)] w-[200px]
             ${activeSection === "contact" ? "active" : ""}`}
            >
              <a href="#contact">Contact</a>
            </li>

            <li className="py-3 border-t border-[var(--white-alpha-20)] w-[200px]">
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className="py-3 border-t border-[var(--white-alpha-20)] w-[200px]">
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>

          <div className="text-center mt-9">
            <p className="text-white font-forum text-5xl">Visit us</p>
            <address
              className="
            mt-6
            text-[var(--quick-silver)]
            leading-[var(--lineHeight-3)]
            not-italic"
            >
              <span className="block">Restaurant Sk, Deniz City,</span>
              <span className="block">Bursa 9578, Turkey</span>
            </address>

            <p className="text-[var(--quick-silver)] mt-6">
              Open: 9.30 am - 2.30pm
            </p>

            <a
              className="text-[var(--quick-silver)] mt-6"
              href="milato:lezzetg@restaurant.com"
            >
              lezzetg@restaurant.com
            </a>

            <div
              className="w-2 h-2 border border-[var(--gold-crayola)] rotate-45
            my-7 mx-auto"
            ></div>

            <p className="text-[var(--quick-silver)] mt-6">Booking Request</p>

            <a
              href="tel:+5301118800"
              className="text-[var(--gold-crayola)] mt-6"
            >
              + 530 111 88 00
            </a>
          </div>
        </nav>

        <Button
          href="#reservation"
          text="Find a table"
          className=" hidden lg:inline-flex
        px-5 py-5 
        bg-[var(--gold-crayola)]
        text-[var(--smoky-black-1)]"
        />
      </div>
    </header>
  );
}
