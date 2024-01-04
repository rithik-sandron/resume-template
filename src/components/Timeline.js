import "../App.css";
function Timeline({ tile, obj }) {
  return (
    <div className="section">
      <h2>{tile}</h2>

      <div className="border">
        {obj.map((x) => {
          return (
            <div className="e">
              <time>{x.duration}</time>
              <h2>{x.role}</h2>
              <h3>{x.name}</h3>
              {x.tags && (
                <ul className="inline">
                  <span>Stack</span>
                  {x.tags.map((y) => {
                    return <li>{y}</li>;
                  })}
                </ul>
              )}
              {x.details && x.details}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
