export default function City({ name, subText, image }) {
  return (
    <div
      className="flex h-[330px] w-full flex-col justify-end rounded-lg bg-cover bg-center bg-no-repeat p-6 text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className="text-4xl font-bold">{name}</h3>
      <p className="mt-2 text-xl">{subText}</p>
    </div>
  );
}
