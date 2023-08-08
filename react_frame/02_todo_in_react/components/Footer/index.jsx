import React from 'react';
import './index.css'

export default class Footer extends React.Component {
    handleAllCheck = (e) => {
        // console.log(e);
        this.props.changeAll(e.target.checked);
    }
    handleDeleteAll = () => {
        // console.log(e);
        this.props.deleteAllDone()
    }

    render() {
        let { todos } = this.props
        let total = todos.length;
        let donetotal = todos.reduce((acc, cur) =>
            acc + (cur.done ? 1 : 0)
            , 0)

        return (
            <div>
                <div className="todo-footer"
                    style={{
                        display: total ? 'block' : 'none'
                    }}  >
                    <label>
                        <input type="checkbox"
                            onChange={this.handleAllCheck} checked={donetotal === total && total > 0 ? true : false} />
                    </label>
                    <span>
                        <span>已完成{donetotal}</span> / 全部{total}
                    </span>
                    <button className="btn btn-danger"
                        onClick={this.handleDeleteAll}>清除已完成任务</button>
                </div >
                <div style={{
                    display: total ? 'none' : 'block'
                }}>
                    <h2  > here is  no data, please add first!</h2>
                </div>
            </div>


        )
    }
}

