import React, { Component } from "react";
import "../reset.css";
import "../App.css";
import Search from "./Search";
import Photos from "./Photos";
import Footer from "./Footer";
import Filter from "./Filter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Instagram Viewer</h1>
        <Search />
        <Filter />
        <Photos />
        <Footer />
      </div>
    );
  }
}

export default App;
