export default function Hotel({ name, city, price, rate, type, image_url }) {
  return (
    <div className="mb-2 flex w-full flex-col gap-2">
      <div
        style={{ backgroundImage: `url(${image_url})` }}
        className="h-[350px] bg-cover bg-center bg-no-repeat"
      ></div>
      <a href="/detail">
        <h3 className="text-lg font-bold underline">{name}</h3>
      </a>
      <p>{city}</p>
      <p className="font-bold">Starting from &#36;{price}</p>
      <p>
        <span className="mr-2 bg-color-#003580 p-1 text-white">{rate}</span>
        {type}
      </p>
    </div>
  );
}
