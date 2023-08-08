import React, { Component } from 'react'

import Search from "./components/Search"
import List from "./components/List"

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  getSearch = (search) => {
    this.setState(search)
    console.log(search);
  }

  render() {

    return (
      <div className="container">
        <Search getSearch={this.getSearch} ></Search>
        <List {...this.state}></List>
      </div>
    )
  }
}
