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
          <small>
            This was coded by Leslie Nesbit and is{" "}
            <a href="https://github.com/LeelooDawn/dictionary-project">
              open-sourced
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
