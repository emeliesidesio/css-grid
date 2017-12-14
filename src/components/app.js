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
          <div className="image" style={{ backgroundImage: `url(${a})` }} />
        </div>
        <div className="tall">
          <div className="image" style={{ backgroundImage: `url(${curly})` }} />
        </div>
        <div>
          <div className="image" style={{ backgroundImage: `url(${and})` }} />
        </div>

        <div>
          <span className="headline">Usage</span>
          <span className="bodytext innermargin">/ Apple’s iOS interface<br /> / NYC’s MTA & Chicago's Transit Authority signage<br /> / NASA Space Shuttle orbiter</span>
        </div>
        <div>
          <span className="headline">Widths & weights</span>
          <span className="bodytext innermargin">/ 9 weights<br /> / three widths (normal, condensed, extended)<br /> / 51 fonts total</span>
        </div>
        <div>
          <span className="headline">Strokes</span>
          <span className="bodytext innermargin">/ cut horizontally or vertically<br /> / distinguishes Helvetica from dupes like Arial</span>
        </div>
        <div>
          <span className="headline">Punctuation</span>
          <span className="bodytext innermargin">/heavier punctuation marks than Helvetica</span>
        </div>
        <div className="wide">
          <span className="quote">“I don’t care what it says, as long as it’s in Helvetica“</span>
        </div>
        <div className="wide">
          <span className="alphabet">abcdefghijk<br />lmnopqrstu<br />vwxyz</span>
        </div>
        <div>
          <span className="headline">Helvetica<br /> – the movie</span>
          <span className="bodytext innermargin">/ documentary by Gary Hustwit<br /> / released for Helvetica's 50th birthday (2007)</span>
        </div>
      </div>
    )
  }

}

export default App
