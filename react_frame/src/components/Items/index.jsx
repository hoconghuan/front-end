import React from 'react';
import './index.css'

export default class Item extends React.Component {
    state = {
        mouse: false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    s
    handleChange = (id) => {
        return () => {
            this.props.changeTodos(id)
        }
    }
    render() {
        const { title, done, id, } = this.props
        const { mouse } = this.state

        return (
            <>
                <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" defaultChecked={done} onChange={this.handleChange(id)} />
                        <span>{title}</span>
                    </label>
                    <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} >删除</button>
                </li>

            </>
        )
    }
}

