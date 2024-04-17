import { noAuto } from "@fortawesome/fontawesome-svg-core";
import Calendar from "./Calendar";
const Header = () => {
  const openSearchPage = () => {
    window.location.replace("http://localhost:3000/search");
  };
  return (
    <div className="header">
      <h1 className="header-title">A lifetime of discounts? It's Genius.</h1>
      <p className="header-text">
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <button className="btn-blue btn-nobdradius">Sign in/ Register</button>
      <div className="header-inputs">
        <div className="header-input">
          <div className="inputs">
            <i class="fa fa-bed"></i>
            <input
              className="input"
              type="text"
              placeholder="Where are you going?"
            />
          </div>
          <Calendar />
          <div className="inputs">
            <i class="fa fa-female"></i>
            <input
              className="input"
              type="text"
              placeholder="1 adult - 0 children - 1 room"
            />
          </div>
          <button className="btn-blue btn-nobdradius" onClick={openSearchPage}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
