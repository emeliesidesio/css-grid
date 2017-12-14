import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="grid-container">
        <div className="wide">
          <span>Helvetica</span>
          <span>Designed by</span>
          <span>Max Miedinger 1957</span>
        </div>
        <div className="tall wide">2</div>
        <div className="tall">3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div className="wide">9</div>
        <div className="wide">10</div>
        <div>11</div>
      </div>
    )
  }

}

export default App
