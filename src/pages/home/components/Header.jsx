import Button from "../../../utilities/Button";
import Input from "../../../utilities/Input";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { addDays, format } from "date-fns";

export default function Header() {
  const [showDateRange, setShowDateRange] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="container relative mx-auto flex flex-col gap-6 px-4 py-10 text-white lg:px-0">
      <h2 className="text-4xl font-bold">
        A lifetime of discounts? It&apos;s Genius.
      </h2>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <Button className="mb-16 w-fit bg-[#0171c2] hover:bg-white hover:text-color-#003580">
        Sign in / Register
      </Button>
      <div className="absolute bottom-0 left-0 flex w-[calc(100%-32px)] translate-x-[16px] translate-y-1/2 flex-col gap-4 rounded-md border-2 border-amber-400 bg-white p-2 md:flex-row md:items-center md:justify-center lg:w-full lg:translate-x-0">
        <form
          action=""
          className="relative flex flex-col gap-1 md:flex-row md:items-center"
        >
          <Input
            placeholder="Where are you going?"
            icon="fa-bed"
            className="lg:w-[200px]"
          />

          <div className="flex flex-1 items-center gap-1">
            <i className="fa-fw fa-solid fa-calendar text-gray-400"></i>
            <input
              className="w-full px-1 py-2 text-sm text-gray-900 focus:outline-none lg:w-[200px]"
              onClick={() =>
                setShowDateRange((showDateRange) => !showDateRange)
              }
              value={`${format(
                dateRange[0].startDate,
                "dd-MM-yyyy",
              )} to ${format(dateRange[0].endDate, "dd-MM-yyyy")}`}
            />
          </div>

          {showDateRange && (
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              className="date absolute left-0 top-0 translate-x-1/2 translate-y-11"
              minDate={new Date()}
              ranges={dateRange}
              onChange={(item) => setDateRange([item.selection])}
            />
          )}

          <Input
            placeholder="2 adult &#183; 0 children &#183; 1 room"
            icon="fa-female"
            className="lg:w-[200px]"
          />
        </form>
        <button
          type="button"
          className="bg-[#0171c2] px-4 py-2 transition hover:bg-color-#003580"
          onClick={() => window.location.replace("/search")}
        >
          Search
        </button>
      </div>
    </div>
  );
}
