export default function Input({ icon: Icon, type = "text", placeholder }) {
  return (
    <div className="relative w-full">
      {Icon && <Icon className="absolute left-3 top-3 text-gray-400 text-xl" />}

      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 pl-10 rounded bg-black/50 text-white 
                   placeholder-gray-400 outline-none focus:ring-2 
                   focus:ring-yellow-500"
      />
    </div>
  );
}
