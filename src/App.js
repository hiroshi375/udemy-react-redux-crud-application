import React, { Component } from "react";

const App = () => ( <Counter></Counter> )

class Counter extends Component {
  constructor(props) {
    super(props)
    // countをキーとした値を0で初期化
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // stateのcountの値を取得して+1してsetStateで更新
    this.setState( { count: this.state.count + 1 })
  }
  handleMinusButton = () => {
    // stateのcountの値を取得して-1してsetStateで更新
    this.setState( { count: this.state.count - 1 })
  }
  handleResetButton = () => {
    // stateのcountの値を0にしてsetStateで更新
    this.setState( { count: 0 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count } </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
        <button onClick={this.handleResetButton}>reset</button>
      </React.Fragment>
    )
  }
}

export default App;
