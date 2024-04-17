import Navbar from "../home/Navbar";
import RegisLogin from "../home/RegisLogin";
import FormSignUp from "../home/FormSignUp";
import Footer from "../home/Footer";

import "./Detail.css";

const dataDetail = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const Detail = () => {
  return (
    <div>
      <div className="top-page">
        <div className="nav">
          <Navbar />
          <RegisLogin />
        </div>
      </div>

      <div className="main-page">
        <div className="main-top">
          <div className="info">
            <h2 className="info-title">{dataDetail.name}</h2>
            <p className="info-address">
              <i class="fa-solid fa-location-dot"></i>
              {dataDetail.address}
            </p>
            <p className="info-distance">{dataDetail.distance}</p>
            <p className="info-deal">{dataDetail.price}</p>
          </div>
          <button className="btn-blue">Reserve or Book Now</button>
        </div>
        <div className="main-midle">
          {dataDetail.photos.map((obj, index) => {
            return <img key={index} src={obj} alt={obj} />;
          })}
        </div>
        <div className="main-bottom">
          <div className="main-bottom__left">
            <h2 className="left-title">{dataDetail.title}</h2>
            <p className="left-description">{dataDetail.description}</p>
          </div>
          <div className="main-bottom__right">
            <p className="right-title">Perfect for a 9-night stay!</p>
            <p className="right-description">
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <h2 className="right-price">
              ${dataDetail.nine_night_price}
              <span> (9 nights)</span>
            </h2>
            <button className="btn-blue">Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <div className="bottom-page">
        <FormSignUp />
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
