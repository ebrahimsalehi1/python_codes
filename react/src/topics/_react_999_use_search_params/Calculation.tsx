export function Calculation() {
  return (
    <>
      <div>
        <label htmlFor="">
          Kaufpreis
        </label>
        <input
          type="number"
          name="price"
          title="price"
        />
      </div>
      <div>
        <label>Wohnfläche</label>
        <input
          type="number"
          name="area"
          title="area"
        />
      </div>
      <div>Jahreskaltmiete</div>
      <div>Bruttomietrendite</div>
      <div>Kaufpreisfaktor</div>
      <div>Hausgeld</div>
      <div></div>
    </>
  );
}
