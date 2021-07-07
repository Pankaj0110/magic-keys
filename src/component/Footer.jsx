import { memo } from "react";
import "../styles/footer.scss";
import { Setting } from "./setting";
import { Sounds } from "./sounds";
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
          <div className="ctrl footer-controll">
            <div className="item">
              <label>Strokes</label> <b>{result.strokes}</b>
            </div>
            <div className="item">
              <label>Words</label>
              <b>{result.words}</b>
            </div>
            <div className="item">
              <label>Speed</label>
              <b>{result.wordsPerMinute}</b>
            </div>
            <div className="item">
              <label>Words-5</label>
              <b>{result.words5}</b>
            </div>
            <div className="item">
              <label>Words-5 speed</label> <b>{result.words5PerMinute}</b>
            </div>
          </div>
        </div>
        <div className="section">
          <section className="title">Settings</section>
          <Setting handlefontsize={handlefontsize} setduration={setduration} />
          <section className="title">Add Ambience</section>
          <Sounds />
        </div>
      </div>
    );
  }
);
