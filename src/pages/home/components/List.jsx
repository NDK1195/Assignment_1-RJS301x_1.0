import City from "./City";
import Hotel from "./Hotel";
import PropertyType from "./PropertyType";
import cities from "../../../../data/city.json";
import types from "../../../../data/type.json";
import hotelList from "../../../../data/hotel_list.json";

export default function List(props) {
  let renderList;

  // Create render list based on data prop
  if (props.data === "cities") {
    renderList = cities.map((city) => <City key={city.name} {...city} />);
  } else if (props.data === "types") {
    renderList = types.map((type) => (
      <PropertyType key={type.name} {...type} />
    ));
  } else if (props.data === "hotels") {
    renderList = hotelList.map((hotel) => (
      <Hotel key={hotel.name} {...hotel} />
    ));
  }

  return (
    <div className="container mx-auto px-4">
      {props.data === "types" && (
        <h2 className="text-2xl font-bold">Browse by property type</h2>
      )}
      {props.data === "hotels" && (
        <h2 className="text-2xl font-bold">Homes guests love</h2>
      )}
      <div className="mb-8 mt-10 flex flex-col justify-between gap-4 md:flex-row">
        {renderList}
      </div>
    </div>
  );
}
