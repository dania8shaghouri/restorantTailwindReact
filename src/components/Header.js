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
          <img src={logo} alt="lezzet"></img>
        </a>

        {/* <ul className="hidden lg:flex gap-8  text-white">
          <li>
            <a
              href="#home"
              className={
                activeSection === "home"
                  ? activeLinkClass
                  : "hover:text-[var(--gold-crayola)]"
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className={
                activeSection === "menu"
                  ? activeLinkClass
                  : "hover:text-[var(--gold-crayola)]"
              }
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={
                activeSection === "contact"
                  ? activeLinkClass
                  : "hover:text-[var(--gold-crayola)]"
              }
            >
              Contact
            </a>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-[var(--gold-crayola)] "
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
                  ? "text-[var(--gold-crayola)] "
                  : "hover:text-[var(--gold-crayola)]"
              }
            >
              Login
            </NavLink>
          </li>
        </ul> */}

        <ul className="hidden lg:flex gap-8 text-white">
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
        </ul>
        <ul className="hidden lg:flex gap-8 text-white ml-[-105px]">
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
        <button onClick={() => setMenuOpen(true)} className="lg:hidden">
          <span className="block w-7 h-[2px] bg-white mb-1"></span>
          <span className="block w-7 h-[2px] bg-white mb-1"></span>
          <span className="block w-7 h-[2px] bg-white mb-1"></span>
        </button>
        {/* navbar */}
        <nav
          className={`
        fixed top-0 left-0 h-full w-80 bg-[var(--smoky-black-1)]
        transform transition-transform duration-300 z-50
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button onClick={() => setMenuOpen(false)} className="text-white p-4">
            ✕
          </button>
          <ul className="text-white mt-10 px-6 space-y-6">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#register">Register</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>

        <Button
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
