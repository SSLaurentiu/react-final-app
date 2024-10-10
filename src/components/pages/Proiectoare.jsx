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
      <div className="led_descriere pagina">
        <h1 className="led_titlu_pagina">Proiectoare si bare LED</h1>
        <p>
          Proiectoarele si barele LED sunt recomandate atunci cand doriti sa
          mergeti cu masina in paduri , pe munte , la overlanding . In momentul
          in care lasarea serii va surprinde in unul dintre aceste scenarii ,
          dumneavoastra sunteti pregatit . In functie de varianta aleasa si de
          dimensiunile lor, proiectoarele si barele LED ofera un camp vizual
          cuprins intre 200 si 900 de metri , poate chiar mai mult. Sunt
          construite din materiale de calitate superioara, materiale usoare si
          care au proprietati foarte bune de disipare a caldurii generate de
          LED-uri. Pot fi achizitionate impreuna cu accesorii de montare ,
          pentru montare pe plafon, pe bara de protectie frontala sau
          posterioara, sau pe portbagajul de pe plafon. Va rugam sa ne
          contactati pentru a va putea oferii toate detaliile necesare , si
          pentru a va ajuta sa faceti alegerea corecta , in functie de
          necesitatile dumnoavoastra
        </p>
      </div>
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
