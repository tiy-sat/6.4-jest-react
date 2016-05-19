import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className={this.props.isOpen? "modal" : "hidden"}>
        <h1>This is a modal</h1>
      </div>
    )
  }
})
