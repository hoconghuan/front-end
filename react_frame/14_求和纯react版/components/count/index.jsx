import React, { Component } from 'react'

export default class count extends Component {
    state = {
        sum: 0,
    }
    inrement = () => {
        let { sum } = this.state
        let { value: number } = this.selectNumber
        sum += number * 1
        this.setState({ sum })
    }
    derement = () => {
        let { value: number } = this.selectNumber
        let { sum } = this.state
        sum -= number * 1
        this.setState({ sum })
    }
    inrementOdd = () => {
        let { value: number } = this.selectNumber
        let { sum } = this.state
        if (sum % 2) {
            sum += number * 1
        }
        this.setState({ sum })
    }
    inrementWait = () => {
        let { value: number } = this.selectNumber
        let { sum } = this.state
        setTimeout(() => {
            sum += number * 1
            this.setState({ sum })
        }, 500);
    }

    render() {
        let { sum } = this.state
        return (
            <div>
                <div>
                    <h1>当前求会为:{sum}</h1>
                </div>
                <select ref={(c) => { return this.selectNumber = c }}>

                    {/*  ref={(c) => { return this.selectNumber = c }  因为react是直接拿节点的 ，这里用ref回调函数就是把react自身的ref函数的selectNumber绑定到select节点 这样就好拿输入值*/}

                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.inrement}>+</button>&nbsp;
                <button onClick={this.derement}>-</button>&nbsp;
                <button onClick={this.inrementOdd}>odd add</button>&nbsp;
                <button onClick={this.inrementWait}>add wait</button>&nbsp;
            </div >
        )
    }
}
