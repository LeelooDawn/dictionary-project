import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>The Dictionary</strong>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>This was coded by Leslie Nesbit and is open-sourced</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
