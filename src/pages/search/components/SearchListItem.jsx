import Button from "../../../utilities/Button";

export default function SearchListItem({
  name,
  distance,
  tag,
  type,
  description,
  free_cancel,
  price,
  rate,
  rate_text,
  image_url,
}) {
  return (
    <div className="mb-3 flex h-[250px] gap-4 rounded border p-3">
      <div className="basis-1/4 ">
        <img
          src={image_url}
          alt="Property image"
          className=" h-[226px] w-[300px] object-cover"
        />
      </div>
      {/* Image column */}
      <div
        className={`flex flex-col ${
          free_cancel && "justify-around"
        } basis-2/4 gap-2`}
      >
        <h3 className="text-2xl font-bold text-[#0171c2]">{name}</h3>
        <p>{distance} from center</p>
        <p className="w-fit rounded-md bg-[#018009] p-0.5 text-white">{tag}</p>
        <p className="font-bold">{description}</p>
        <p>{type}</p>
        {free_cancel && (
          <div>
            <p className="font-bold text-[#018009]">Free cancellation</p>
            <p className="text-[#018009]">
              You can cancel later, so lock in this great price today!
            </p>
          </div>
        )}
      </div>
      {/* Description column */}
      <div className="ml-auto flex basis-1/4 flex-col justify-between">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">{rate_text}</p>
          <p className="bg-color-#003580 p-1 text-white">{rate}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-2xl">&#36;{price}</p>
          <p className="text-[#b19eb4]">Includes taxes and fees</p>
          <Button className="mt-2 w-full rounded-md bg-[#0171c2] font-bold text-white hover:bg-color-#003580">
            See availability
          </Button>
        </div>
      </div>
      {/* Price column */}
    </div>
  );
}
