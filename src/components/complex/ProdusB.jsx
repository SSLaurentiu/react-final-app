const ProdusBara = ({ produsB }) => {
  return (
    <div className="b_grid_item">
      <img className="b_imagine_produs" src={produsB.imagine} alt="" />
      <h1 className="b_titlu">{produsB.titlu}</h1>
      <p className="b_descriere">{produsB.descriere}</p>
    </div>
  );
};
export default ProdusBara;
