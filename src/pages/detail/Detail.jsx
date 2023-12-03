import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import SignUp from "../../components/SignUp";
import detailData from "../../../data/detail.json";
import DetailContent from "./components/DetailContent";

const Detail = () => {
  return (
    <>
      <header className="mb-10 bg-color-#003580">
        <Navbar />
      </header>
      <section className="container mx-auto mb-20 px-2">
        <DetailContent {...detailData} />
      </section>
      <section className="mb-10 bg-color-#003580 px-2">
        <SignUp />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Detail;
