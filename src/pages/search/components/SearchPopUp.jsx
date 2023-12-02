import Button from "../../../utilities/Button";
import Input from "../../../utilities/Input";

export default function SearchPopUp() {
  return (
    <div className="h-1/2 basis-1/4 rounded-md bg-[#fdbb02] p-3">
      <form action="">
        <h3 className="color-[#5e5853] mb-2 text-xl font-bold">Search</h3>
        <div>
          <label>Destination</label>
          <Input className="my-2" />
        </div>
        <div>
          <label>Check-in Date</label>
          <Input className="my-2" type="date" />
        </div>
        <div>
          <label>Options</label>
          <div className="flex flex-col gap-2 p-4 ">
            <div className="flex flex-col justify-between gap-2 lg:flex-row">
              <label className="text-sm">Min price per night</label>
              <Input className="ml-auto lg:w-[50px]" type="number" />
            </div>
            <div className="flex flex-col justify-between gap-2 lg:flex-row">
              <label className="text-sm">Max price per night</label>
              <Input className="ml-auto lg:w-[50px]" type="number" />
            </div>
            <div className="flex flex-col justify-between gap-2 lg:flex-row">
              <label className="text-sm">Adult</label>
              <Input
                className="ml-auto lg:w-[50px]"
                placeholder="1"
                type="number"
              />
            </div>
            <div className="flex flex-col justify-between gap-2 lg:flex-row">
              <label className="text-sm">Children</label>
              <Input
                className="ml-auto lg:w-[50px]"
                placeholder="0"
                type="number"
              />
            </div>
            <div className="flex flex-col justify-between gap-2 lg:flex-row">
              <label className="text-sm">Room</label>
              <Input
                className="ml-auto lg:w-[50px]"
                placeholder="1"
                type="number"
              />
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="mt-4 w-full bg-[#0171c2] text-white hover:bg-color-#003580"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
