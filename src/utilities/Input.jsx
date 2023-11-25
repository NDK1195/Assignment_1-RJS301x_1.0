export default function Input({ type = 'text', placeholder = '', icon }) {
  return (
    <div className='flex justify-center items-center gap-2'>
      <i className={`fa-solid ${icon} text-gray-400`}></i>
      <input
        type={type}
        placeholder={placeholder}
        className='w-[200px] text-sm px-1 py-2 focus:outline-none focus:text-gray-900'
      />
    </div>
  );
}
