import React from 'react'

import Header from './components/Header/index.jsx'
import List from './components/List/index.jsx';
import Footer from './components/Footer/index.jsx'
import './App.css';

export default class App extends React.Component {

  state = {
    todos: [
      { id: '001', title: '吃饭', done: true },
      { id: '002', title: '睡觉', done: false },
      { id: '003', title: '发呆', done: false }
    ]
  }
  // 从Header中往App中添数据
  addTodos = (todo) => {
    const { todos } = this.state
    todos.unshift(todo)
    this.setState({ todos })
  }

  // Item控制App中的数据
  changeTodos = (id) => {
    const { todos } = this.state
    todos.forEach(todo => {
      if (todo.id === id) todo.done = !todo.done

      this.setState({ todos })
    })
  }

  render() {

    const { todos } = this.state

    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodos={this.addTodos}></Header>
            <List todos={todos} changeTodos={this.changeTodos}></List>
            <Footer></Footer>
          </div>
        </div>
      </div >
    )
  }

}


