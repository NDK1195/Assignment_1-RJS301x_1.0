import CityList from "./components/CityList";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <>
      <section className="bg-color-#003580">
        <Navbar />
        <Header />
      </section>
      <section>
        <CityList />
      </section>
    </>
  );
};

export default Home;
