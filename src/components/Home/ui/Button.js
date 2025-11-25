import "./button.css";
export default function Button({ href, text }) {
  return (
    <a
      href={href}
      className="
        font-bold
        uppercase
        max-w-max
        btn relative
        text-[var(--gold-crayola)]
        text-[var(--fontSize-label-2)]
        tracking-[var(--letterSpacing-5)]
        border-2 border-[var(--gold-crayola)]
        px-[45px] py-[12px]
        overflow-hidden
        z-[1]
      "
    >
      <span className="text text-1 transition-all duration-300">{text}</span>

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
