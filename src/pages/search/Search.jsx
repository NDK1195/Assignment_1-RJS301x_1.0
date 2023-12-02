import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import SearchPopUp from "./components/SearchPopUp";
import SearchList from "./components/SearchList";

const Search = () => {
  return (
    <>
      <header className="mb-10 bg-color-#003580">
        {" "}
        <Navbar />
      </header>
      <section className="container mx-auto mb-28 flex flex-col gap-4 px-2 lg:flex-row">
        <SearchPopUp />
        <SearchList />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Search;
