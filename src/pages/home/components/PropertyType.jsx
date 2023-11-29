export default function PropertyType({ name, count, image }) {
  return (
    <div className="mb-2 flex w-full flex-col justify-center gap-1 ">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-[220px] rounded-t-lg bg-cover bg-center bg-no-repeat"
      ></div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{count} hotels</p>
    </div>
  );
}
