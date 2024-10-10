const ProdusJanta = ({ produsJ }) => {
  return (
    <div className="j_grid_item">
      <img className="j_imagine_produs" src={produsJ.imagine} alt="" />
      <h1 className="j_titlu">{produsJ.titlu}</h1>
      <p className="j_descriere">{produsJ.descriere}</p>
    </div>
  );
};
export default ProdusJanta;
