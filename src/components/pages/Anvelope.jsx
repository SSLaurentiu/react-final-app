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
      <div className="anv_descriere_pagina">
        <h1 className="anv_titlu_pagina">Anvelope 4x4</h1>
        <p>
          Anvelopele dedicate masinilor 4x4 sunt anvelope special concepute
          conditiilor grele de utilizare. Anvelopele de offroad sunt A/T de la
          All Terrain sau M/T de la Mud Terrain. Anvelopele A/T sunt anvelope
          recomandate celor care doresc sa foloseasca autovehiculul preponderent
          pe asfalt, si ocazional in teren accidentat. Aceste anvelope sunt
          indicate overlanding-ului. Anvelopele M/T sunt recomandate celor care
          folosesc masina preponderent in teren accidentat , pe munte. Acestea
          sunt anvelopele care ofera aderenta maxima in conditii dificile si
          ofera performanta buna si pe asfalt. Exista si categoria anvelopelor
          M/T EXTREM , ceea ce inseamna ca aceste anvelope sunt recomandate doar
          utilizarii offroad, unde au performante formidabile. Aceste anvelope
          insa sunt zgomotoase pe asfalt, se echilibreaza greu si aderenta lor
          pe asfalt nu este buna. Va rugam sa ne contactati inainte de alegerea
          anvelopelor, pentru a va ajuta sa faceti alegerea potrivita nevoilor
          dumneavoastra.{" "}
        </p>
      </div>
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
