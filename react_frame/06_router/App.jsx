import React, { Component } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import { NavLink, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header></Header>
          </div>
        </div>
        {/* <BrowserRouter> */}

        {/* 每个路由器只有一个路由器 ， 既然都是包裹渲染的 Home 和 About 组件，而且这俩组件在 app 总组件中，那么为什么不直接包裹 app呢 */}

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*   <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
              </div>
            </div>
          </div>
        </div>
        {/* </BrowserRouter> */}
      </div>
    )
  }
}
