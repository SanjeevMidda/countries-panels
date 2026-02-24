import "./App.css";
import Panel from "./components/Panel";
import TEXTDATA from "./data/TextData";
import COLORS from "./data/Colors";
import { useMemo } from "react";

function App() {
  const panels = useMemo(() => {
    return TEXTDATA.map((p) => ({
      ...p,
      colors: [
        COLORS[Math.floor(Math.random() * COLORS.length)],
        COLORS[Math.floor(Math.random() * COLORS.length)],
      ],
    }));
  }, []);

  return (
    <div className="App">
      <div className="mainPanelContainer">
        {panels.map((p) => {
          return (
            <Panel key={p.id} title={p.title} area={p.area} colors={p.colors} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
