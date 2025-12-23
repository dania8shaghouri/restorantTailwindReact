import "./button.css";

export default function Button({ href, text, className = "" }) {
  return (
    <a
      href={href}
      className={`
        inline-flex  
        uppercase
        justify-center
        items-center
        font-bold
        btn relative
        overflow-hidden
        z-[1] px-[45px] py-[12px]
        text-[var(--gold-crayola)]
        text-[length:var(--fontSize-label-2)]
        tracking-[var(--letterSpacing-5)]
        border-2 border-[var(--gold-crayola)]

        ${className}
      `}
    >
      <span className="text text-1 transition-all duration-300">{text}</span>

      <span
        className="
          text text-2 absolute left-1/2 top-full
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
