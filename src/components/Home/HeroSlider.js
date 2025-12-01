import { useState, useEffect } from "react";
import { HeroSlides } from "../../data/HeroSlides";
import Slider from "./Slider";
import SliderButtons from "./SliderButtons";
import tableIcon from "../../assets/img/tableicon.png";

function HeroSlider() {
  // slider’ın şu an hangi slide’da olduğunu tutmak
  const [current, setCurrent] = useState(0);
  const total = HeroSlides.length;

  // slider’ı otomatik olarak ilerletir
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  // İlk slide ise → en sona git Değilse → 1 azalt
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));

  return (
    <section className="relative h-[600px] overflow-hidden">
      {HeroSlides.map((slide, index) => (
        <Slider key={index} slide={slide} isActive={index === current} />
      ))}
      {/* fonksiyonu props olarak gönderiyor */}
      <SliderButtons prevSlide={prevSlide} nextSlide={nextSlide} />

      {/* Book a Table */}
      <a
        href="/menu"
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
        <img
          src={tableIcon}
          alt="booking icon"
          className="mb-[6px]"
          width="60"
          height="60"
        />
        <span className="text-[var(--black)] font-bold uppercase text-center text-sm tracking-[var(--letterSpacing-1)]">
          Book A Table
        </span>
      </a>
    </section>
  );
}

export default HeroSlider;
