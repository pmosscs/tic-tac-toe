import "./App.css";
import Square from "./components/Square";

function App() {
  const thisVariable = "oh yeah variable";

  return (
    <div className="App">
      <Square totes={thisVariable} />
    </div>
  );
}

export default App;
