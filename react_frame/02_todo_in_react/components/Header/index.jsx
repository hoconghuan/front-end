import React from "react"
import './index.css'
import { nanoid } from "nanoid";

export default class Header extends React.Component {
    handle = (e) => {
        // console.log(e);
        const { addTodos } = this.props;
        const { target, key } = e
        if (target.value === '') {
            alert('Please input a value!!')
            return
        }
        if (key === "Enter") {
            const todo = { id: nanoid(), title: target.value, done: false }
            addTodos(todo)
            e.target.value = ''
        }

    }



    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handle} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
