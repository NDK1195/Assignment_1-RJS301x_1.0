import Button from "../../../utilities/Button";

export default function DetailContent({
  name,
  address,
  distance,
  price,
  photos,
  title,
  description,
  nine_night_price,
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-between gap-3 md:flex-row">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-sm">
            <span className="mr-3">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            {address}
          </p>
          <p className="text-[#0171c2]">{distance}</p>
          <p className="text-[#018009]">{price}</p>
        </div>
        <div className="">
          <Button className="rounded-md bg-[#0171c2] font-medium text-white hover:bg-color-#003580">
            Reserve or Book Now!
          </Button>
        </div>
      </div>
      {/* Name and location */}
      <div className="mb-3 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => {
          return (
            <div key={index}>
              <img src={photo} alt="Hotel photo" />
            </div>
          );
        })}
      </div>
      {/* Images */}
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="basis-3/4">
          <h2 className="mb-3 text-2xl font-bold">{title}</h2>
          <p className="text-justify">{description}</p>
        </div>
        <div className="flex basis-1/4 flex-col gap-5 bg-[#ebf3ff] p-5">
          <h3 className="text-xl font-bold text-[#555557]">
            Perfect for 9-night stay!
          </h3>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <p className="text-3xl text-[#555557]">
            <span className="font-bold text-black">
              &#36;{nine_night_price}
            </span>{" "}
            (9 nights!)
          </p>
          <Button className="rounded-md bg-[#0171c2] font-medium text-white hover:bg-color-#003580">
            Reserve or Book Now!
          </Button>
        </div>
      </div>
      {/* Description and price */}
    </div>
  );
}
