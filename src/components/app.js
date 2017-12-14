import React from "react"
import a from "assets/a.png"
import curly from "assets/curly_bracet.png"
import and from "assets/and.png"

class App extends React.Component {

  render() {
    return (
      <div className="grid-container">
        <div className="wide">
          <span className="logo">Helvetica</span>
          <span className="byline">Designed by</span>
          <span className="bodytext">Max Miedinger 1957</span>
        </div>
        <div className="tall wide">
          <img className="image-a" src={a} alt="a" />
        </div>
        <div className="tall">
          <img className="image-curly" src={curly} alt="curly" />
        </div>
        <div>
          <img src={and} alt="and" />
        </div>
        <div>
          <span className="headline">Usage</span>
          <span className="bodytext">/ Apple’s iOS interface / NYC’s MTA & Chicago's Transit Authority signage / NASA Space Shuttle orbiter</span>
        </div>
        <div>
          <span className="headline">Widths & weights</span>
          <span className="bodytext">/ 9 weights / three widths (normal, condensed, extended) / 51 fonts total</span>
        </div>
        <div>
          <span className="headline">Strokes</span>
          <span className="bodytext">/ cut horizontally or vertically / distinguishes Helvetica from dupes like Arial</span>
        </div>
        <div>
          <span className="headline">Punctuation</span>
          <span className="bodytext">/heavier punctuation marks than Helvetica</span>
        </div>
        <div className="wide">
          <span className="quote">“I don’t care what it says, as long as it’s in Helvetica“</span>
        </div>
        <div className="wide">
          <span className="alphabet">abcdefghijk
            lmnopqrstu
            vwxyz
          </span>
        </div>
        <div>
          <span className="headline">Helvetica – the movie</span>
          <span className="bodytext">/ documentary by Gary Hustwit / released for Helvetica's 50th birthday (2007)</span>
        </div>
      </div>
    )
  }

}

export default App
