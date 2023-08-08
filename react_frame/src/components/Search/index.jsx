import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {
    search = () => {
        let { value } = this.input
        // console.log(this);
        this.props.getSearch({ isFirst: false, isLoading: true })

        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            (response) => {
                // console.log(response.data)
                this.props.getSearch({ isLoading: false, users: response.data.items })
            }, err => {
                this.props.getSearch({ isLoading: false, err: err.message })
            })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.input = c} type="text" placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
