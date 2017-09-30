import React, { Component } from "react";
import "../reset.css";
import "../App.css";
import Search from "./Search";
import Photos from "./Photos";
import Footer from "./Footer";
import Filter from "./Filter";
import Sort from "./Sort";
import InstagramResponse from "../photos";

const data = InstagramResponse.data;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredphotoArray: [],
      filter_selected: "all"
    };
  }
  handleFilter = filter_name => {
    this.setState({ filter_selected: filter_name });
  };

  render() {
    return (
      <div className="App">
        <h1>Instagram Viewer</h1>
        <Search />
        <div id="filter-wrapper">
          <Filter filterSelected={this.handleFilter} />
          <Sort />
        </div>
        <Photos data={data} filter={this.state.filter_selected} />
        <Footer />
      </div>
    );
  }
}

export default App;
