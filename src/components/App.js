import React, { Component } from "react";
import "../reset.css";
import "../App.css";
import Search from "./Search";
import Photos from "./Photos";
import Filter from "./Filter";
import Sort from "./Sort";
import InstagramResponse from "../photos";

var data = InstagramResponse.data;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photosArray: data,
      searchVal: ""
    };
  }
  handleFilter = filter_name => {
    let newArray = [];
    if (filter_name === "all") {
      this.setState({
        photosArray: data
      });
    } else {
      newArray = data
        .map(card => {
          if (card.filter === filter_name) {
            return card;
          }
        })
        .filter(item => {
          return typeof item === "object";
        });
      this.setState({
        photosArray: newArray
      });
    }
  };
  sorting_function = (data, value) => {
    return data.sort((a, b) => {
      if (value === "Name") {
        a = a.user.username;
        b = b.user.username;
      } else if (value === "Date") {
        a = a.created_time;
        b = b.created_time;
      }
      return a < b ? -1 : a > b ? 1 : 0;
    });
  };
  //Determines if sort is ascending or descending
  sorting = (value, sortData, type) => {
    let sortedArr = this.sorting_function(sortData, value);
    if (type === "up") {
      sortedArr = sortedArr.reverse();
    }
    this.setState({
      photosArray: sortedArr
    });
  };

  /*
  Handles Search 
  */

  searchInput = val => {
    this.setState({ searchVal: val });
  };

  searchPhotos = val => {
    return new Promise((resolve, reject) => {
      val = val.toLowerCase();
      //resets array so we can search through full data
      this.setState({ photosArray: data });
      resolve(val);
    }).then(val => {
      let newArr = this.state.photosArray.reduce((acc, card) => {
        let username = card.user.username;
        //Some cards do not have any caption properties
        let caption = card.caption === null ? "" : card.caption.text;
        if (
          username.toLowerCase().includes(val) ||
          caption.toLowerCase().includes(val)
        ) {
          acc.push(card);
        }
        return acc;
      }, []);
      this.setState({ photosArray: newArr });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Instagram Viewer</h1>
        <Search
          searchVal={this.state.searchVal}
          searchInput={this.searchInput}
          searchPhotos={this.searchPhotos}
        />
        <div id="filter-wrapper">
          <Filter filterSelected={this.handleFilter} />
          <Sort sorting={this.sorting} data={this.state.photosArray} />
        </div>
        <Photos
          data={this.state.photosArray}
          filter={this.state.filter_selected}
        />
      </div>
    );
  }
}

export default App;
