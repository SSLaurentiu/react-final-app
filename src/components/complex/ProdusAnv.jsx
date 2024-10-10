const ProdusAnvelopa = ({ produsA }) => {
  return (
    <div className="anv_grid_item">
      <img className="anv_imagine_produs" src={produsA.imagine} alt="" />
      <h1 className="anv_titlu">{produsA.titlu}</h1>
      <p className="anv_descriere">{produsA.descriere}</p>
    </div>
  );
};
export default ProdusAnvelopa;
