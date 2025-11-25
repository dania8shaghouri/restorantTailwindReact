// import { useState } from "react";
// import { HeroSlides } from "../../data/HeroSlides";
// import Slider from "../Home/Slider";
// import SliderButtons from "./SliderButtons";
// // img
// import tableIcon from "../../assets/img/tableicon.png";

// function HeroSlider() {
//   const [current, setCurrent] = useState(0);
//   const total = HeroSlides.length;

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === HeroSlides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? HeroSlides.length - 1 : prev - 1));
//   };

//   return (
//     <section>
//       {HeroSlides.map((slide, index) => (
//         <Slider key={index} slide={slide} isActive={index === current} />
//       ))}

//       {/* Slides */}
//       {/* {HeroSlides.map((slide, index) => (
//         <Slider key={index} slide={slide} isActive={index === current} />
//       ))} */}

//       {/* Slider Buttons */}
//       <SliderButtons prevSlide={prevSlide} nextSlide={nextSlide} />

//       {/* book a table icon */}
//       <a
//         href="#"
//         className="
//         absolute bottom-[15px] right-[15px] z-[2]
//         bg-[var(--gold-crayola)]
//         w-[130px] h-[130px] scale-[0.6]
//         flex flex-col items-center justify-center
//         after:content-[''] after:absolute after:inset-0
//         after:border after:border-[var(--gold-crayola)]
//         after:animate-rotate360
//         "
//       >
//         <img
//           src={tableIcon}
//           alt="booking icon"
//           className="mb-[6px] bg-[var(--gold-crayola)]"
//           width="60"
//           height="60"
//         />

//         <span
//           className="
//     text-[var(--black)] font-bold uppercase text-center text-sm
//     tracking-[var(--letterSpacing-1)]
//   "
//         >
//           Book A Table
//         </span>
//       </a>
//     </section>
//   );
// }

// export default HeroSlider;

import { useState, useEffect } from "react";
import { HeroSlides } from "../../data/HeroSlides";
import Slider from "./Slider";
import SliderButtons from "./SliderButtons";
import tableIcon from "../../assets/img/tableicon.png";

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const total = HeroSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const nextSlide = () =>
    setCurrent(prev => (prev === total - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent(prev => (prev === 0 ? total - 1 : prev - 1));

  return (
    <section className="relative h-[600px] overflow-hidden">
      {HeroSlides.map((slide, index) => (
        <Slider key={index} slide={slide} isActive={index === current} />
      ))}

      <SliderButtons prevSlide={prevSlide} nextSlide={nextSlide} />

      {/* Book a Table */}
      <a
        href="#"
        className="
          absolute bottom-[15px] right-[15px] z-20
          bg-[var(--gold-crayola)]
          w-[130px] h-[130px] scale-[0.6]
          flex flex-col items-center justify-center
          after:content-[''] after:absolute after:inset-0
          after:border after:border-[var(--gold-crayola)]
          after:animate-rotate360
        "
      >
        <img src={tableIcon} alt="booking icon" className="mb-[6px]" width="60" height="60" />
        <span className="text-[var(--black)] font-bold uppercase text-center text-sm tracking-[var(--letterSpacing-1)]">
          Book A Table
        </span>
      </a>
    </section>
  );
}

export default HeroSlider;

