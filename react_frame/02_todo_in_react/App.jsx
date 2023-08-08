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
  // #region header

  // 从Header中往App中添数据
  addTodos = (todo) => {
    let { todos } = this.state
    todos.unshift(todo)
    this.setState({ todos })
  }
  // #endregion header

  // #region items
  //item勾选
  changeTodos = (id) => {
    let { todos } = this.state
    todos.forEach(todo => {
      if (todo.id === id) todo.done = !todo.done

      this.setState({ todos })
    })
  }

  // 对数据删除
  deleteTodos = (id) => {
    let { todos } = this.state
    todos = todos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }
  // #endregion items

  // #region footer

  // 全部勾选
  changeAll = (done) => {
    let { todos } = this.state
    todos.forEach((todo) => {
      todo.done = done
    })
    this.setState({ todos })
  }

  // 删除已选
  deleteAllDone = () => {
    let { todos } = this.state
    todos = todos.filter((todo) => {
      return !todo.done
    })
    this.setState({ todos })
  }

  // #endregion footer



  //渲染页面
  render() {

    let { todos } = this.state

    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodos={this.addTodos}></Header>

            <List todos={todos}
              changeTodos={this.changeTodos}
              deleteTodos={this.deleteTodos}></List>

            <Footer todos={todos}
              changeAll={this.changeAll}
              deleteAllDone={this.deleteAllDone} ></Footer>
          </div>
        </div>
      </div >
    )
  }

}


