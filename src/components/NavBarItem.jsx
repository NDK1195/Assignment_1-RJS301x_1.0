/* eslint-disable react/prop-types */
export default function NavBarItem({
  type,
  icon,
  status,
  index,
  changeActiveStatus,
}) {
  return (
    <li
      className={`flex justify-center items-center gap-3 text-white cursor-pointer ${
        status && 'border p-3 rounded-xl transition'
      }`}
      onMouseOver={() => changeActiveStatus(index)}
    >
      <i className={`fa-solid ${icon}`}></i>
      <p>{type}</p>
    </li>
  );
}
