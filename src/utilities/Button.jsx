/* eslint-disable react/prop-types */
export default function Button({ children, className, type = "button" }) {
  return (
    <button type={type} className={`px-4 py-2 transition ${className}`}>
      {children}
    </button>
  );
}
