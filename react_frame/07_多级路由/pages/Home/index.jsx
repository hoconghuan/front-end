import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import News from './News';
import Messages from './Messages';

export default class Home extends Component {
    render() {

        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className="list-group-item " to='/home/news'>News</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item " to='/home/messages'>Messages</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/home/news' component={News}></Route>
                        {/* route里面的是 path 路径  navlink的是 to去哪儿 */}
                        <Route path='/home/messages' component={Messages}></Route>
                        <Redirect to='/home/messages'></Redirect>
                    </Switch>

                </div>
            </div>
        )
    }
}
