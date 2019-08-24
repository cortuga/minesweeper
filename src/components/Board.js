import React, { Component } from "react"
import axios from "axios"

class Board extends Component {
  state = {
    data: [],
    board: [],
    mines: 0,
    state: "",
    id: 0,
    difficulty: 0
    // board: resp.data.board
    // board is currently the easy mode of the game board
  }

  componentDidMount = async () => {
    // componentDidMount()
    const resp = await axios.post("https://minesweeper-api.herokuapp.com/games")
    // if (resp === 200) {
    console.log(resp)
    this.setState({
      data: resp.data,
      board: resp.data.board,
      mines: resp.data.mines,
      state: resp.data.state,
      id: resp.data.id,
      difficulty: resp.data.difficulty
    })
    // }
    console.log(this.state.state)
  }

  resetGame = () => {
    this.setState({
      //need to think of a way to reset the board when this button is clicked.
    })
  }

  render() {
    return (
      <>
        <h1>Minesweeper!</h1>
        <button onClick={this.reset}>reset</button>
        <main>
          <table>
            <tbody>
              {this.state.board.map((row, i) => {
                return (
                  <tr key={i}>
                    {row.map((col, j) => {
                      return <td>{col}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </main>
      </>
    )
  }
}

export default Board
