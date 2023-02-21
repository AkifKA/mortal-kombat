const Header = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img
          className="logo"
          src="https://frpnet.net/wp-content/uploads/2021/02/mortal-kombat-logo.png"
          alt=""
        />
      </div>
      <div className="right">
        <a href="#">Home</a>
        <a href="#">Characters</a>
        <a href="#">History</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
    </div>
  );
};

export default Header;
