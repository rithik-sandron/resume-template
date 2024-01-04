import "../App.css";
function Section({ tile, obj }) {
  return (
    <div className="section">
      <h2>{tile}</h2>
      <div className="flex">
        <div className="inline-section">
          {obj.map((x) => {
            return <li>{x}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Section;
