import Button from "../../../utilities/Button";
import NavBarItem from "./NavBarItem";
import navBarData from "../../../../data/navBar.json";
import { useState } from "react";

export default function Navbar() {
  const [data, setData] = useState(navBarData);

  function handleChangeActiveStatus(index) {
    let updatedData = [...navBarData];

    for (let i = 0; i < updatedData.length; i++) {
      i !== index
        ? (updatedData[i].active = false)
        : (updatedData[i].active = true);
    }

    setData(updatedData);
  }

  return (
    <nav className="bg-color-#003580 px-8 py-10">
      <div className="mb-6 flex items-center justify-between text-white">
        <h1>Booking Website</h1>
        <div className="flex gap-4">
          <Button className="bg-white text-color-#003580 hover:bg-[#0171c2] hover:text-white">
            Register
          </Button>
          <Button className="bg-white text-color-#003580 hover:bg-[#0171c2] hover:text-white">
            Login
          </Button>
        </div>
      </div>
      <ul className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        {data.map((data, index) => (
          <NavBarItem
            key={index}
            type={data.type}
            icon={data.icon}
            status={data.active}
            index={index}
            changeActiveStatus={handleChangeActiveStatus}
          ></NavBarItem>
        ))}
      </ul>
    </nav>
  );
}
