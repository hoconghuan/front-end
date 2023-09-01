import React, { Component, lazy, Suspense } from 'react'
import Header from './components/Header';
import { NavLink, Route, Switch, Redirect,} from "react-router-dom";


const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
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
        df
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*   <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              <NavLink className="list-group-item" to="/about">About</NavLink>

              {/* NavLink 可以控制高亮显示，  或者可以说 控制路由切换时的CSS属性 */}

              <NavLink className="list-group-item" to="/home">Home</NavLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">

                <Suspense callback={() => { <h2>Loading.....</h2> }}>
                  {/* switch 是防止路由一直匹配 */}
                  <Switch>
                    <Route path="/about" component={About}></Route>

                    {/* 在route中加 exact 就是严格匹配， 严格匹配是在 navlink中表示路径必须一样才能显示组件，比如  /home/a/b , 在route中 路径为/home 就不能匹配。 取消就可以直接匹配上，这个属于模糊匹配  */}

                    <Route path="/home" component={Home}></Route>

                    <Redirect to='/home'></Redirect>
                  </Switch>
                </Suspense>


              </div>
            </div>
          </div>
        </div>
        {/* </BrowserRouter> */}
      </div>
    )
  }
}
