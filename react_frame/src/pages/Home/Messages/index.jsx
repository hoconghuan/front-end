import React, { Component } from 'react'
import { Link, Route } from "react-router-dom";
import Detail from './Detail';

export default class Messages extends Component {
    state = { //数据只能放在state中
        lists: [
            { id: '001', title: 'message001' },
            { id: '002', title: 'message002' },
            { id: '003', title: 'message003' },
        ]
    }
    render() {
        let { lists } = this.state
        return (
            <div>
                <ul >
                    {
                        lists.map((list) => {
                            return (
                                <li key={list.id}>
                                    <Link to=
                                        {{ pathname: '/home/messages/detail/', state: { id: list.id, title: list.title } }}>{list.title}
                                    </Link>
                                </li>

                            )
                        })
                    }

                </ul >
                <hr />
                <Route path='/home/messages/detail' component={Detail}></Route>
            </div>
        )
    }
}
