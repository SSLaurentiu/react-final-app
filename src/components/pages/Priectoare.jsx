import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../Styling/proiectoare.css";
import { useEffect, useState } from "react";
import { produseProiectoare } from "./produse";
import Produs from "../complex/Produs";
export const Proiectoare = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const newRowsArr = [];
    produseProiectoare.forEach((produs, index) => {
      newRowsArr.push(<Produs key={index} produs={produs} />);
    });
    setRows(newRowsArr);
  }, []);
  return (
    <>
      <Navbar />
      {rows.length > 0 ? (
        <div className="led_grid_container"> {rows}</div>
      ) : (
        <p>Loading</p>
      )}

      <div>
        <Footer></Footer>
      </div>
    </>
  );
};
