const dataNav = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

const Navbar = () => {
  const listNav = dataNav.map((obj, index) => {
    return (
      <a
        key={index}
        className={
          obj.active
            ? "nav-group__child nav-group__child_active"
            : "nav-group__child"
        }
        href="http://localhost:3000/"
      >
        <i class={`fa ` + obj.icon}></i>
        <span>{obj.type}</span>
      </a>
    );
  });
  return (
    <div className="nav-left">
      <h2 className="nav-title">Booking Website</h2>
      <div className="nav-groups">{listNav}</div>
    </div>
  );
};

export default Navbar;
