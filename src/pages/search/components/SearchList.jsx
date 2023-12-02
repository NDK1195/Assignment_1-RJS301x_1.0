import searchData from "../../../../data/search.json";
import SearchListItem from "./SearchListItem";

export default function SearchList() {
  return (
    <div className="basis-3/4">
      {searchData.map((data) => (
        <SearchListItem key={data.name} {...data} />
      ))}
    </div>
  );
}
