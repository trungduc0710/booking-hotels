const SearchPopup = () => {
  return (
    <form className="search-popup">
      <h3 className="popup-title">Search</h3>
      <label className="popup-label" htmlFor="">
        Destination
      </label>
      <input type="text"></input>
      <label className="popup-label" htmlFor="">
        Check-in Date
      </label>
      <input type="text" value="26/3/2024 to 27/03/2024" />
      <label className="popup-label" htmlFor="">
        Options
      </label>
      <div className="search-input-groups">
        <label className="popup-label__sup" htmlFor="">
          Min price per night
        </label>
        <input type="text" />
        <label className="popup-label__sup" htmlFor="">
          Max price per night
        </label>
        <input type="text" />
        <label className="popup-label__sup" htmlFor="">
          Adult
        </label>
        <input type="text" placeholder="1" />
        <label className="popup-label__sup" htmlFor="">
          Children
        </label>
        <input type="text" placeholder="0" />
        <label className="popup-label__sup" htmlFor="">
          Room
        </label>
        <input type="text" placeholder="1" />
      </div>
      <button className="btn-blue">Search</button>
    </form>
  );
};

export default SearchPopup;
