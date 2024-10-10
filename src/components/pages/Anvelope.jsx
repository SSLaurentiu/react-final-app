import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../Styling/anvelope.css";
import { useEffect, useState } from "react";
import { produseAnvelope } from "./produse";
import ProdusAnvelopa from "../complex/ProdusAnv";

export const Anvelope = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const newRowsArr = [];
    produseAnvelope.forEach((produsA, index) => {
      newRowsArr.push(<ProdusAnvelopa key={index} produsA={produsA} />);
    });
    setRows(newRowsArr);
  }, []);
  return (
    <>
      <Navbar />
      {rows.length > 0 ? (
        <div className="anv_grid_container"> {rows}</div>
      ) : (
        <p>Loading</p>
      )}

      <div>
        <Footer></Footer>
      </div>
    </>
  );
};
