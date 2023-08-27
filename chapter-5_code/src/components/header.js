
import MYImg from "../../images.png";
 export const Title = () => (
    <a href="/">
      <img className="logo" src={MYImg} alt="MYImg" />
    </a>
  );

  export const Header = () => {
    return (
   <>
      <div className="header">
  <Title/>
     
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i className="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
        </div>
        </>
    );
  };