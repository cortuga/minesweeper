import React, { Component } from "react"
// import Axios from "Axios"

class Cells extends Component {
  render() {
    return (
      <td onClick={this.props.check} onContextMenu={this.props.flag}>
        {" "}
        {this.props.value}
      </td>
    )
  }
}

export default Cells
