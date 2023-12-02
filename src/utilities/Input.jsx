export default function Input({
  type = "text",
  placeholder = "",
  icon,
  className,
}) {
  return (
    <div className="flex flex-1 items-center gap-1">
      {icon && <i className={`fa-fw fa-solid ${icon} text-gray-400`}></i>}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-1 py-2 text-sm focus:text-gray-900 focus:outline-none ${className}`}
      />
    </div>
  );
}
