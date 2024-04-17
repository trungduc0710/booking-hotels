import Navbar from "./Navbar";
import RegisLogin from "./RegisLogin";
import Header from "./Header";
import Citys from "./Citys";
import TypeOfHotel from "./TypeOfHotel";
import Hotels from "./Hotels";
import FormSignUp from "./FormSignUp";
import Footer from "./Footer";

import "./Home.css";

const Home = () => {
  return (
    <div className="page-home">
      <div className="top-page">
        <div className="nav">
          <Navbar />
          <RegisLogin />
        </div>
      </div>
      <Header />
      <div className="main-page">
        <Citys />
        <h3 className="main-title">Browse by property type</h3>
        <TypeOfHotel />
        <h3 className="main-title">Homes guests love</h3>
        <Hotels />
      </div>
      <div className="bottom-page">
        <FormSignUp />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
