import React, { Component } from 'react'


import { incrementActon, decrementActon } from '../redux/count_action';

// 引入 react-redux中的 connect 方法
import { connect } from 'react-redux';

// 引入组件
class Count extends Component {

    inrement = () => {
        let { value: number } = this.selectNumber
        this.props.increment(number * 1)
    }
    derement = () => {
        let { value: number } = this.selectNumber
        this.props.decrement(number * 1)
    }
    inrementOdd = () => {
        let { value: number } = this.selectNumber
        if (this.props.count % 2) {
            this.props.increment(number * 1)
        }
    }
    inrementWait = () => {
        let { value: number } = this.selectNumber

        setTimeout(() => {
            this.props.increment(number * 1)
        }, 500);


    }

    render() {

        return (
            <div>
                <div>
                    <h1>当前求和为:{this.props.count}</h1>
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

export default connect((state) => {
    return { count: state }
}
    , {
        increment: incrementActon,
        decrement: decrementActon
    }
)(Count)