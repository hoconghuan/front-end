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

    pushHandle = (id, title) => {
        console.log(this);
        this.props.history.push(`/home/messages/detail/${id}/${title}`)
    }
    replaceHandle = (id, title) => {
        this.props.history.replace(`/home/messages/detail/${id}/${title}`)
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
                                    <Link to={`/home/messages/detail/${list.id}/${list.title}`}>{list.title}
                                    </Link>
                                    &nbsp;<button onClick={() => {
                                        this.pushHandle(list.id, list.title)
                                    }}>push</button>
                                    &nbsp;<button onClick={() => {
                                        this.replaceHandle(list.id, list.title)
                                    }}>replace</button>
                                </li>

                            )
                        })
                    }

                </ul >
                <hr />
                <Route path='/home/messages/detail/:id/:title' component={Detail}></Route>
            </div>
        )
    }
}
