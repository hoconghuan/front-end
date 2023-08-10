import React, { Component } from 'react'
import qs from 'qs';

let details = [
    { id: '001', content: 'hello Detail 1' },
    { id: '002', content: 'hello Detail 2' },
    { id: '003', content: 'hello Detail 3' }
]

export default class Detail extends Component {


    render() {
        console.log(this.props);
        // let { id, title } = this.props.match.params //param 的方法

        let { search } = this.props.location
        let { id, title } = qs.parse(search.slice(1))

        let detailResult = details.find((detail) => {
            return detail.id === id
        })
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{detailResult.content}</li>
            </ul>

        )
    }
}
