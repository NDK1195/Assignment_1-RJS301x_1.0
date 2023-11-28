import cities from "../../../../data/city.json";
import City from "./City";

export default function CityList() {
  return (
    <div className="container mx-auto mt-28 flex w-[calc(100%-64px)] flex-col items-center justify-between gap-3 md:flex-row ">
      {cities.map((city) => (
        <City key={city.name} {...city} />
      ))}
    </div>
  );
}
