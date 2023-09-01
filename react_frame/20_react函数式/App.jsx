// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     sum: 0
//   }
//   add = () => {

//     this.setState((state) => { return { sum: state.sum + 1 } })
//   }

//   render() {
//     return (
//       <div>
//         <div>当前求和为：{this.state.sum}</div>
//         <button onClick={this.add}>点击</button>
//       </div>
//     )
//   }
// }

import React from 'react'

export default function App() {
  let [count, setcount] = React.useState(0)

  // console.log(count, setcount);

  let add = () => { return setcount(count + 1) }
  return (

    <div>
      <div>当前求和为：{count}</div>
      <button onClick={add}>点击</button>
    </div>
  )
}
