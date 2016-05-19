import React from 'react'
import Modal from "./Modal"

export default React.createClass({
  getInitialState(){
    return {
      isOpen: false
    }
  },
  handleOnClick(e){
    this.setState({isOpen: true});
  },
  render() {
    return (
      <main>
        <h1 className="heading">Hello!</h1>
        <button onClick={this.handleOnClick}>Open Modal</button>
        <Modal isOpen={this.state.isOpen}/>
      </main>
    )
  }
})
