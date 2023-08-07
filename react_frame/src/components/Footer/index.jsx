import React from 'react';
import './index.css'

export default class Footer extends React.Component {
    handleAllCheck = (e) => {
        this.props.changeAll(e.target.checked);
    }


    render() {
        let { todos } = this.props
        let total = todos.length;
        let donetotal = todos.reduce((acc, cur) =>
            acc + (cur.done ? 1 : 0)
            , 0)

        return (
            <div className="todo-footer" >
                <label>
                    <input type="checkbox" onChange={this.handleAllCheck} checked={donetotal === total ? true : false} />
                </label>
                <span>
                    <span>已完成{donetotal}</span> / 全部{total}
                </span>
                <button className="btn btn-danger">清除已完成任务</button>
            </div >
        )
    }
}

