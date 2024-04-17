const dataHotels = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const Hotels = () => {
  const ListHotels = dataHotels.map((obj, index) => {
    return (
      <div key={index} className="card-bd0">
        <img src={obj.image_url} alt={obj.name} />
        <h4 style={{ color: "#313131" }}>
          <a href="http://localhost:3000/detail">{obj.name}</a>
        </h4>
        <p style={{ fontSize: "14px" }}>{obj.count} hotels</p>
        <h4 style={{ color: "#313131" }}>Starting from ${obj.price}</h4>
        <div className="rate">
          <span className="rating-point">{obj.rate}</span>
          {obj.type}
        </div>
      </div>
    );
  });
  return <div className="cards-hotel">{ListHotels}</div>;
};

export default Hotels;
