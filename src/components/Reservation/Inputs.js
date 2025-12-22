export default function Input({ icon: Icon, type = "text", placeholder }) {
  const isDateTime = type === "datetime-local";

  return (
    <div className={`relative ${isDateTime ? "group" : ""}`}>
      {Icon && (
        <Icon
          className={` text-[var(--white)]
            absolute left-5 top-10 text-xl transition-colors
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
          bg-[var(--eerie-black-2)] text-[var(--white)]
          border border-[var(--white-alpha-10)]
          px-5 py-5 w-full
          mx-2 my-4 outline-none
          focus:border-[var(--gold-crayola)]
          ${isDateTime ? "pl-12 " : ""}
        `}
      />
      
    </div>
    
  );
}
