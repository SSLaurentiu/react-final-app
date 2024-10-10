const Produs = ({ produs }) => {
  return (
    <div className="led_grid_item">
      <img className="imagine_produs" src={produs.imagine} alt="" />
      <h1 className="titlu_proiector">{produs.titlu}</h1>
      <p className="led_descriere">{produs.descriere}</p>
    </div>
  );
};
export default Produs;
