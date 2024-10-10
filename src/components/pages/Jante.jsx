import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../Styling/jante.css";
import { useEffect, useState } from "react";
import { produseJante } from "./produse";
import ProdusJanta from "../complex/ProdusJ";

export const Jante = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const newRowsArr = [];
    produseJante.forEach((produsJ, index) => {
      newRowsArr.push(<ProdusJanta key={index} produsJ={produsJ} />);
    });
    setRows(newRowsArr);
  }, []);
  return (
    <>
      <Navbar />
      {rows.length > 0 ? (
        <div className="j_grid_container"> {rows}</div>
      ) : (
        <p>Loading</p>
      )}
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};
