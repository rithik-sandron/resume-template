import "./App.css";
import { details } from "./assets/template";
import g from "./assets/git.svg";
import Timeline from "./components/Timeline";
import Section from "./components/Section";
function App() {
  return (
    <div>
      <div className="main">
        <div>
          <h1>{details.name}</h1>
          {details.exp}
          {details.description}
        </div>

        <div className="icon-wrap">
          <div className="icon">
            <img src={g} alt="" />
            <p>github.com/username</p>
          </div>

          {details.contacts.map((x) => {
            return (
              <div className="icon">
                <span class="material-symbols-rounded">{x.y}</span>
                <p>{x.x}</p>
              </div>
            );
          })}
        </div>
      </div>

      <br />
      <Section tile="Technical Skills" obj={details.skills} />
      <Section tile="Personal Skills" obj={details.personal_skills} />
      <Timeline tile="Experience & Education" obj={details.work} />
      <Section tile="Hobbies" obj={details.hobbies} />
    </div>
  );
}

export default App;
