import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";

export const Jante = () => {
  return (
    <>
      <Navbar />
      <div className="titlu_pagina">
        <h1>Jante Off Road</h1>
        <div>Descriere</div>
      </div>
      <div className="grid_container">
        <div className="grid_item">1</div>
        <div className="grid_item">2</div>
        <div className="grid_item">3</div>
        <div className="grid_item">4</div>
        <div className="grid_item">5</div>
        <div className="grid_item">6</div>
        <div className="grid_item">7</div>
        <div className="grid_item">8</div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};
