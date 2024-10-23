import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import HomeImage from "../assets/home-img.jpg";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Home Page Title</h1>
      <h2>Home Page subheading</h2>
      <img src={HomeImage} height="500px" alt="Home page image" />
      <Link to="/shop">
        <button>Shop</button>
      </Link>
    </div>
  );
};

export default Home;
