import "./App.css";
import Panel from "./components/Panel";
import TEXTDATA from "./data/TextData";
import COLORS from "./data/Colors";

function App() {
  // create panel component
  // provide props to these
  // text, area, circle
  // create movement

  const randomColor = () => {
    const colorOne = COLORS[Math.floor(Math.random() * COLORS.length)];
    const colorTwo = COLORS[Math.floor(Math.random() * COLORS.length)];

    return [colorOne, colorTwo];
  };

  return (
    <div className="App">
      <div className="mainPanelContainer">
        {TEXTDATA.map((p) => {
          return <Panel key={p.id} title={p.title} area={p.area} />;
        })}
      </div>
    </div>
  );
}

export default App;
