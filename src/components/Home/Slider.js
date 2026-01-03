import Button from "./ui/Button";
import separator from "../../assets/img/separator.svg";

function Slider({ slide, isActive }) {
  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background Image with smooth scale */}
      <img
        loading="lazy"
        src={slide.img}
        alt={slide.title}
        className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-linear ${
          isActive ? "scale-[1.15]" : "scale-100"
        }`}
      />

      {/* Text Container */}
      <div
        className="text-center
      absolute inset-0 flex flex-col justify-center items-center px-10 text-white"
      >
        {/* Subtitle */}
        <p
          className={`relative font-bold uppercase
            text-xs sm:text-sm  md:text-lg
            tracking-[var(--letterSpacing-2)] 
            text-[var(--gold-crayola)] mb-3
          transition-opacity duration-700 delay-100 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.subtitle}
          <img
            src={separator}
            loading="lazy"
            alt=""
            className="block w-[100px] mx-auto mt-[5px]"
          />
        </p>

        {/* Title */}
        <h1
          className={` md:text-6xl font-bold mb-4 md:whitespace-pre-line 
          [font-family:var(--fontFamily-forum)]
          transition-opacity duration-700 delay-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.title}
        </h1>

        {/* Text */}
        <p
          className={`mb-6 transition-opacity duration-700 delay-500  ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.text}
        </p>

        {/* Button */}
        <Button
          href="#menu"
          text="View Our Menu"
          className={`transition-opacity duration-700 delay-700 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

export default Slider;
