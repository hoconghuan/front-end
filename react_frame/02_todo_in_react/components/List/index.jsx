
import React from 'react';
import Item from '../Items/index'
import './index.css'

export default class List extends React.Component {
    render() {
        const { todos, changeTodos, deleteTodos } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id}  {...todo} changeTodos={changeTodos} deleteTodos={deleteTodos}></Item>
                    })
                }
            </ul>

        )
    }
}

