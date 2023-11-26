export default function Input({ type = "text", placeholder = "", icon }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <i className={`fa-solid ${icon} text-gray-400`}></i>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-1 py-2 text-sm focus:text-gray-900 focus:outline-none lg:w-[200px]"
      />
    </div>
  );
}
