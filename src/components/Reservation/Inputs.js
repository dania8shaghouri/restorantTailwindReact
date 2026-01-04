// props.icon → bileşen içinde Icon adıyla kullanılır
export default function Input({ icon: Icon, type = "text", placeholder }) {
  const isDateTime = type === "datetime-local";

  return (
    <div className={`relative ${isDateTime ? "group" : ""}`}>
      {/* Icon prop’u varsa render edilir, yoksa hiç render edilmez. */}
      {Icon && (
        <Icon
          className={` 
            absolute left-5 sm:left-5
            top-9 sm:top-10
            text-lg sm:text-xl
            transition-colors
            text-[var(--white)]
            ${
              isDateTime
                ? " group-focus-within:text-[var(--white)] "
                : "text-[var(--white)]"
            }
          `}
        />
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`
          text-base
          sm:text-lg
          placeholder:text-sm
          placeholder:text-[var(--white)]
          bg-[var(--eerie-black-2)] text-[var(--white)]
          border border-[var(--white-alpha-10)]
          px-4 py-4 w-full
          sm:px-5 sm:py-5
          my-3 sm:my-4 outline-none
          focus:border-[var(--gold-crayola)]
          ${isDateTime ? "pl-11 sm:pl-12 " : ""}
        `}
      />
    </div>
  );
}
