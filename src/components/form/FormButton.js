export default function FormButton({ text }) {
  return (
    <button
      className="
    mt-6 w-full h-11 
    text-[var(--gold-crayola)]
    bg-[var(--eerie-black-3)]
    rounded-md
    shadow-md shadow-[var(--quick-silver)]
    transition
    uppercase font-cursive font-semibold
  "
    >
      {text}
    </button>
  );
}
