import { memo } from "react";
import "../styles/footer.scss";
import { Setting } from "./setting";
/**
 * @author Pankaj Kumar
 * @email kumar.pankaj0110@gmail.com
 * @returns 
 */
export const Footer = memo(
  ({ handlefontsize, setduration, result }) => {
    console.log("footer is rendered");
    return (
      <div className="footer">
        <div className="section">
          <section className="title">Results</section>
          <div className="ctrl footer">
            <div className="item">
              <label>strokes</label> {result.strokes}
            </div>
            <div className="item">
              <label>words</label>
              {result.words}
            </div>
            <div className="item">
              <label>Speed</label>
              {result.wordsPerMinute}
            </div>
            <div className="item">
              <label>Words-5</label>
              {result.words5}
            </div>
            <div className="item">
              <label>Words-5 speed</label> {result.words5PerMinute}
            </div>
          </div>
        </div>
        <div className="section">
          <section className="title">settings</section>
          <Setting handlefontsize={handlefontsize} setduration={setduration} />
        </div>
      </div>
    );
  }
);
