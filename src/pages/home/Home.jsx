import List from "./components/List";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <header className="mb-28 bg-color-#003580">
        <Navbar />
        <Header />
      </header>
      <section className="mb-28">
        <List data="cities" />
        <List data="types" />
        <List data="hotels" />
      </section>
      <section className="mb-20 bg-color-#003580">
        <SignUp />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
