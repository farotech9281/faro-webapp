import "./logo.css";
import LogoImage from "../img/logo.png";

const Logo = () => {
  return (
    <>
      <div className="logoContent">
        <div>
          <p>FaroTech</p>
          <img src={LogoImage}></img>
        </div>
      </div>
    </>
  );
};

export default Logo;
