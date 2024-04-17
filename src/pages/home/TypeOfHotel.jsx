const dataType = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const TypeOfHotel = () => {
  const ListType = dataType.map((obj, index) => {
    return (
      <div key={index} className="card-bd2">
        <img src={obj.image} alt={obj.name} />
        <h4 style={{ color: "#313131" }}>{obj.name}</h4>
        <p style={{ fontSize: "14px" }}>{obj.count} hotels</p>
      </div>
    );
  });
  return <div className="cards-type">{ListType}</div>;
};

export default TypeOfHotel;
