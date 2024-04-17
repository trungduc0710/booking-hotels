const dataCity = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const Citys = () => {
  const ListCity = dataCity.map((obj, index) => {
    return (
      <div
        key={index}
        className="card-bd4"
        style={{
          background: `url(${obj.image})`,
          backgroundSize: "cover",
        }}
      >
        <h2 className="city-title">{obj.name}</h2>
        <h3 className="city-title__sub">{obj.subText}</h3>
      </div>
    );
  });
  return <div className="cards-city">{ListCity}</div>;
};

export default Citys;
