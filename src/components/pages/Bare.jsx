import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../Styling/bare.css";
import { useEffect, useState } from "react";
import { produseBare } from "./produse";
import ProdusBara from "../complex/ProdusB";
export const Bare = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const newRowsArr = [];
    produseBare.forEach((produsB, index) => {
      newRowsArr.push(<ProdusBara key={index} produsB={produsB} />);
    });
    setRows(newRowsArr);
  }, []);
  return (
    <>
      <Navbar />
      {rows.length > 0 ? (
        <div className="b_grid_container"> {rows}</div>
      ) : (
        <p>Loading</p>
      )}

      <div>
        <Footer></Footer>
      </div>
    </>
  );
};
