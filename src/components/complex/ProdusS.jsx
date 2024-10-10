const ProdusSuspensii = ({ produsS }) => {
  return (
    <div className="s_grid_item">
      <img className="s_imagine_produs" src={produsS.imagine} alt="" />
      <h1 className="s_titlu">{produsS.titlu}</h1>
      <p className="s_descriere">{produsS.descriere}</p>
    </div>
  );
};
export default ProdusSuspensii;
