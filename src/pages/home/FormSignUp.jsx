const FormSignUp = () => {
  return (
    <div className="form-signup">
      <h1 className="form-title">Save time, save money!</h1>
      <p className="form-text">Sign up and we'll send the best deals to you</p>
      <div className="inputs">
        <div className="inputs">
          <input className="input" type="Email" placeholder="Your Email" />
          <button className="btn-blue" onClick="">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
