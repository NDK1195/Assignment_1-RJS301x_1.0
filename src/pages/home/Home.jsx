import List from "./components/List";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

const Home = () => {
  return (
    <>
      <section className="mb-28 bg-color-#003580">
        <Navbar />
        <Header />
      </section>
      <section className="mb-28">
        <List data="cities" />
        <List data="types" />
        <List data="hotels" />
      </section>
      <section className="mb-28 bg-color-#003580">
        <Signup />
      </section>
    </>
  );
};

export default Home;
