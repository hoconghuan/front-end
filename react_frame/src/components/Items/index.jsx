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

    handleChange = (id) => {
        return (e) => {
            console.log(e.target.checked);
            this.props.changeTodos(id)
        }
    }

    handleDelete = (id) => {
        return () => {
            console.log(id);
            if (window.confirm('Are you sure you want to delete')) {  //在react中window上的属性要加window.
                this.props.deleteTodos(id)
            }
        }
    }


    render() {
        const { title, done, id, } = this.props
        const { mouse } = this.state

        return (
            <>
                <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
                    onMouseEnter={this.handleMouse(true)}
                    onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={done}
                            onChange={this.handleChange(id)} />
                        <span>{title}</span>
                    </label>
                    <button className="btn btn-danger"
                        style={{ display: mouse ? 'block' : 'none' }}
                        onClick={this.handleDelete(id)} >删除</button>
                </li>

            </>
        )
    }
}

