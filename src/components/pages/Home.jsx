import { useEffect, useState } from "react";
import Navbar from "../complex/Navbar";
import { getPosts } from "../../services/postsServices";
import PostComponent from "../complex/PostComponent";
import Footer from "../complex/Footer";
const Home = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const newRowsArr = [];

    getPosts().then(async (res) => {
      res.forEach((post) => {
        newRowsArr.push(<PostComponent key={post.id} post={post} />);
      });

      setRows(newRowsArr);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="h1">Pasiunea pentru offroad</h1>
        <p className=" content">
          Datorita pasiunii pentru masinile de offroard (Nissan Patrol, Toyota
          Land Cruiser, Jeep Wrangler etc.) si masinile de overlanding (Nissan
          Pathfinder, Toyota 4Runner, Jeep Cherokee etc.) a luat nastere
          brand-ul OffRoad Extreme Sport. Incepand cu anul 2020 ne ocupam cu
          comercializarea produselor dedicate offroad-ului si de asemenea
          customizam la cerere masinile 4x4.
        </p>
        <p className="image">
          <img src="/nissan.png" alt="" />
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
