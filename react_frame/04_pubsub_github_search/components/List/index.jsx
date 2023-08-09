import React, { Component } from 'react'
import "./index.css"
import PubSub from 'pubsub-js'

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }
    componentDidMount() {
        PubSub.subscribe('getSearch', (_, data) => {
            console.log(data);
            this.setState(data)
        })
    }
    render() {
        let { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>welcome to use this search</h2> :
                        isLoading ? <h2>Loading</h2> :
                            err ? <h2>{err}</h2> :
                                users.map((user) => {
                                    return (
                                        <div key={user.id} className="card">
                                            <a rel="noreferrer" href={user.html_url} target="_blank">
                                                <img alt="avatoor" src={user.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
