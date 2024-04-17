const openDetailPage = () => {
  window.location.replace("http://localhost:3000/detail");
};

const SearchListItem = (props) => {
  const listItem = props.dataSearch.map((obj) => {
    return (
      <div className="item-result">
        <img className="item-result-left" src={obj.image_url} alt={obj.name} />
        <div className="item-result-right">
          <div className="result-decrisble">
            <h2 className="result-title">{obj.name}</h2>
            <p className="result-para">{obj.distance} from center</p>
            <span className="result-tag">{obj.tag}</span>
            <p className="description">
              <strong>{obj.description}</strong>
            </p>
            <p className="type-hotel">{obj.type}</p>

            <p className="free-cancel">
              {obj.free_cancel && "Free cancellation"}
            </p>
            <p className="free-cancel-mess">
              {obj.free_cancel &&
                "You can cancel later, so lock in this great price today!"}
            </p>
          </div>
          <div className="result-rating-price">
            <div className="rating">
              {obj.rate_text}
              <span className="rate-point">{obj.rate}</span>
            </div>
            <div className="price-and-btn">
              <h2 className="price">${obj.price}</h2>
              <p className="price-sub">Includes taxes and fees</p>
              <button className="btn-bl" onClick={openDetailPage}>
                See availability
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="search-result">{listItem}</div>;
};

export default SearchListItem;
