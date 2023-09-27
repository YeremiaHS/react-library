import "./home.css";
import Navbar from "../../components/navbar-home";
import Carousel from "../../components/slider";
import Card from "../../components/card";

const Home = () => {
  
  return (
    <>
      <Navbar />

      {/* <ModalHome /> */}

      <Carousel />

      <div class="text1">
        <p class="text-list">List Book</p>
      </div>

      <Card />
    </>
  );
};

export default Home;
