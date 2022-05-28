import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, seeResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    seeResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" autoFocus={true} onChange={handleKeyword} />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
