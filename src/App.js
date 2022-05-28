import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>The Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Dictionary" />
        </main>
        <footer className="App-footer">
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
