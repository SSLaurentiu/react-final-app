import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../Styling/suspensii.css";
import { useEffect, useState } from "react";
import { produseSuspensii } from "./produse";
import ProdusS from "../complex/ProdusS";

export const Suspensii = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const newRowsArr = [];
    produseSuspensii.forEach((produsS, index) => {
      newRowsArr.push(<ProdusS key={index} produsS={produsS} />);
    });
    setRows(newRowsArr);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="s_titlu_pagina">Suspensii dedicate 4x4</h1>
        <p className="s_descriere pagina">
          Suspensiile dedicate vehiculelor 4x4 sunt special concepute pentru
          cele mai grele conditii de teren. Indiferent ca doriti sa faceti doar
          un upgrade masinii dumneavoastra , sau doriti sa o echipati pentru
          overlanding, offroad sau chiar competitii , aceste kit-uri sunt
          alegerea potrivita nevoilor dumneavoastra. IMPORTANT! Foarte
          importanta este consilierea pentru alegerea variantei optime de
          suspensie in functie de masina, de incarcarea permanenta actuala sau
          viitoare si de destinatia masinii: offroad recreational, utilitara,
          pentru expeditii, concursuri, tractari, etc. Vinderea de kituri de
          suspensie fara personalizarea acestora este complet gresita si chiar
          periculoasa. O suspensie gresit aleasa poate fi mai proasta decat cea
          de origine a masinii!
        </p>
      </div>
      {rows.length > 0 ? (
        <div className="s_grid_container">{rows}</div>
      ) : (
        <p>Loading</p>
      )}
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};
