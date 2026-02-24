import "./App.css";
import Panel from "./components/Panel";
import TEXTDATA from "./data/TextData";
import COLORS from "./data/Colors";

const noOfPanels = Array.from({ length: 5 }, (_, index) => index);

console.log(noOfPanels);
function App() {
  // create panel component
  // provide props to these
  // text, area, circle
  // create movement

  return (
    <div className="App">
      <div className="mainPanelContainer">
        {noOfPanels.map((p) => {
          return <Panel id={p.id} title={p.title} area={p.area} />;
        })}

        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
      </div>
    </div>
  );
}

export default App;
