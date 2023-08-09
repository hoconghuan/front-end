import React, { Component } from 'react'
import "./index.css"

export default class List extends Component {
    render() {
        let { users, isFirst, isLoading, err } = this.props
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
