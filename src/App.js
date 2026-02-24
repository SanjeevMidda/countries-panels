import "./App.css";
import Panel from "./components/Panel";

function App() {
  // create panel component
  // provide props to these
  // text, area, circle
  // create movement

  return (
    <div className="App">
      <div className="mainPanelContainer">
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
