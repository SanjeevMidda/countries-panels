import "./App.css";
import Panel from "./components/Panel";
import TEXTDATA from "./data/TextData";
import COLORS from "./data/Colors";
import { useMemo } from "react";

function App() {
  const getRandomColor = () =>
    COLORS[Math.floor(Math.random() * COLORS.length)];

  const panels = useMemo(() => {
    return TEXTDATA.map((p) => ({
      ...p,
      colors: [getRandomColor(), getRandomColor()],
    }));
  }, []);

  return (
    <div className="App">
      <div className="mainPanelContainer">
        {panels.map((p) => (
          <Panel key={p.id} title={p.title} area={p.area} colors={p.colors} />
        ))}
      </div>
    </div>
  );
}

export default App;
