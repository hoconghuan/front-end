
//使用fetch + try catch  + async await  组成promise的语法糖系列。   彻底解决了自己在学promise时不懂这些的问题

import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    search = async () => {
        let { value } = this.input

        // this.props.getSearch({ isFirst: false, isLoading: true })
        PubSub.publish('getSearch', { isFirst: false, isLoading: true })

        try {
            let response = await fetch(`https://api.github.com/search/users?q=${value}`)
            let data = await response.json()
            console.log(data);
            PubSub.publish('getSearch', { isLoading: false, users: data.items })

        } catch (err) {
            console.log(err);
            PubSub.publish('getSearch', { isLoading: false, err: err.message })
        }

        // .then(
        // (response) => {
        //     console.log(response.data)
        //     // this.props.getSearch({ isLoading: false, users: response.data.items })
        //     PubSub.publish('getSearch', { isLoading: false, users: response.data.items })

        // }, err => {
        //     // this.props.getSearch({ isLoading: false,err:error.message)
        //     PubSub.publish('getSearch', { isLoading: false, err: err.message })
        // })
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
