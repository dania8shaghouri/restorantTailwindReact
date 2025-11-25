import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function SliderButtons({ prevSlide, nextSlide }) {
  return (
    <>
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="slide to previous"
        className="
          hidden md:grid
          absolute z-10 text-[var(--gold-crayola)]
          border border-[var(--gold-crayola)]
          w-[45px] h-[45px]
          place-items-center
          top-1/2 -translate-y-1/2
          rotate-45 transition-all duration-300
          left-[30px]
          hover:bg-[var(--gold-crayola)] hover:text-black
          focus-visible:bg-[var(--gold-crayola)] focus-visible:text-black
        "
      >
        <IoChevronBack className="-rotate-45 text-2xl" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="slide to next"
        className="
          hidden md:grid
          absolute z-10 text-[var(--gold-crayola)]
          border border-[var(--gold-crayola)]
          w-[45px] h-[45px]
          place-items-center
          top-1/2 -translate-y-1/2
          rotate-45 transition-all duration-300
          right-[30px]
          hover:bg-[var(--gold-crayola)] hover:text-black
          focus-visible:bg-[var(--gold-crayola)] focus-visible:text-black
        "
      >
        <IoChevronForward className="-rotate-45 text-2xl" />
      </button>
    </>
  );
}
