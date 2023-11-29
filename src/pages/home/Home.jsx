import List from "./components/List";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <>
      <section className="mb-28 bg-color-#003580">
        <Navbar />
        <Header />
      </section>
      <section>
        <List data="cities" />
        <List data="types" />
        <List data="hotels" />
      </section>
    </>
  );
};

export default Home;
