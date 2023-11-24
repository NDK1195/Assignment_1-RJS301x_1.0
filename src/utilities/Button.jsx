/* eslint-disable react/prop-types */
export default function Button({ children, className }) {
  return (
    <button className={`py-2 px-4 transition ${className}`}>{children}</button>
  );
}
