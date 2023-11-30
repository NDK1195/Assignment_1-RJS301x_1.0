export default function Hotel({ name, city, price, rate, type, image_url }) {
  return (
    <div className="mb-2 flex flex-1 flex-col justify-stretch gap-2">
      <img src={image_url} alt="" className="h-[350px] w-full " />
      <div className="flex flex-1 flex-col gap-1">
        <a href="/detail">
          <h3 className="text-lg font-bold underline">{name}</h3>
        </a>
        <div className="mt-auto flex flex-col gap-2">
          <p>{city}</p>
          <p className="font-bold">Starting from &#36;{price}</p>
          <p>
            <span className="mr-2 bg-color-#003580 p-1 text-white">{rate}</span>
            {type}
          </p>
        </div>
      </div>
    </div>
  );
}
