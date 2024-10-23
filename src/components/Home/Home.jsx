import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import HomeImage from "../../assets/home-img.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.home}>
        <h1>Store Name</h1>
        <h2>Start shopping now!</h2>
        <img
          className={styles.homeImage}
          src={HomeImage}
          alt="Home page image"
        />
        <Link to="/shop">
          <button className={styles.shopButton}>Shop</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
