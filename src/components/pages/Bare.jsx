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
      <div className="b_descriere_pagina">
        <h1 className="b_titlu_pagina">
          Bare de protectie dedicate offroad-ului
        </h1>
        <p>
          Barele de protectie , sunt special concepute pentru a oferii un plus
          masinilor care sunt folosite in offroad. Acestea sunt confectionate
          din otel sau aluminiu.Barele ofera posibilitatea montarea unui troliu,
          lumini led suplimentare , ocheti de tractare si de asemenea ofera
          rezistenta inbunatatita la impact.
        </p>
      </div>
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
