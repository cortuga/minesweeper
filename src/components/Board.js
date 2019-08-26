import React, { Component } from "react"
import axios from "axios"
import Cells from "./Cells"

class Board extends Component {
  state = {
    data: [],
    board: [],
    state: "",
    id: 0,
    mines: 0,
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
    // console.log(this.state.state)
  }

  resetGame = () => {
    this.setState({
      //need to think of a way to reset the board when this button is clicked.
    })
  }

  checkCell = (x, y) => {
    //this function is to do what it says
    console.log("clicked ${x}, ${y}")

    axios.post(
      "http://minesweeper-api.herokuapp.com/games/${this.state.id}/check",
      {
        row: x,
        col: y
      }
    )
  }

  // createBoard = props => {
  //   let board = []

  //   for (let i = 0; i < props.rows; i++) {
  //     board.push([])
  //   }
  // }

  flag = (row, column) => {
    if (this.state.id === 0) {
      return
    }
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
                      return (
                        <Cells
                          key={j}
                          display={this.state.board[i][j]}
                          onClick={() => this.checkCell(i, j)}
                        />
                      )
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
