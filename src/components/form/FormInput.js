export default function FormInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        w-full mt-4 py-4
        text-white placeholder:text-gray-400
        bg-transparent
        border-b border-[#212121]
        transition-transform
        duration-300
        // focus
        focus:outline-none
        focus:border-[var(--gold-crayola)]
        focus:-translate-y-3
       "
      ></input>
    </>
  );
}
