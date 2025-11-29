import "./ButtonMenu.css";
export default function ButtonMenu({ href, text }) {
  return (
    <a
      href={href}
      className="
        uppercase
        max-w-max
        btn relative
        bg-[var(--gold-crayola)]
        text-[var(--black)]
        text-[length:var(--fontSize-label-2)]
        tracking-[var(--letterSpacing-5)]
        font-[var(--weight-bold)]
        border-2 border-[var(--gold-crayola)]
        py-[8px] px-[7px]
        overflow-hidden
        float-right
        rounded-[20px]
        z-[1] mx-auto mt-[26px]
        
      "
    >
      <span className="text-xs text text-1 transition-all duration-300">{text}</span>

      <span
        className="
          text text-2
          absolute left-1/2 top-full
          -translate-x-1/2
          text-[var(--smoky-black-1)]
          transition-all duration-300
          whitespace-nowrap
        "
        aria-hidden="true"
      >
        {text}
      </span>
    </a>
  );
}
