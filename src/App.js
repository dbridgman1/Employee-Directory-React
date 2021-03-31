import React, { Component } from "react";
import NavBar from "./components/navbar/navbar";
import Search from "./components/search";
import EmployeeList from "./components/employeeList";
import API from "./utils/API";

class App extends Component {
  state = {
    search: "",
    data: [],
    directory: [],
  };

  componentDidMount() {
    API.search()
      .then((res) =>
        this.setState({
          directory: res.data.results,
          data: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    let query = value.toLowerCase().trim();
    const data = this.state.data;
    let results = [];

    for (let i = 0; i < data.length; i++) {
      let person = data[i];
      let fullName = (person.name.first + " " + person.name.last).toLowerCase();
      console.log(fullName);
      if (query === fullName.substring(0, query.length)) {
        results.push(person);
      }
    }

    this.setState({
      search: value,
      directory: results,
    });
  };

  sortData = event => {
    event.preventDefault();
    let unsorted = this.state.directory;
    let sorted = unsorted.sort((a, b) => {
      let aFullName = (a.name.first + a.name.last).toLowerCase().trim();
      let bFullName = (b.name.first + b.name.last).toLowerCase().trim();
      if (aFullName < bFullName) return -1;
      if (aFullName > bFullName) return 1;
      return 0;
    });
    this.setState({ directory: sorted });
  };

  render() {
    return (
      <>
        <NavBar />
        <Search change={this.handleInputChange} sort={this.sortData} />
        <EmployeeList employees={this.state.directory} />
      </>
    );
  }
}

export default App;
