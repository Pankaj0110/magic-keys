import { fontSize, defaultSize, times, defaultTime } from "../utils";
/**
 * @author Pankaj Kumar
 * @email kumar.pankaj0110@gmail.com
 * @returns
 */
export const Setting = ({ handlefontsize, setduration }) => {
  const options = fontSize.map((val) => (
    <option key={val} value={val}>
      {val}
    </option>
  ));
  const timeOptions = times.map((val) => (
    <option key={val} value={val}>
      {val}
    </option>
  ));

  const handleFontChange = (e) => {
    handlefontsize(e.target.value);
  };

  const handleDurationChange = (e) => {
    setduration(e.target.value);
  };

  return (
    <div className="settings">
      <div className="ctrl">
        <label htmlFor="font-size">Font size</label>
        <select
          id="font-size"
          className="slct slct-secondary"
          defaultValue={defaultSize}
          onChange={handleFontChange}
        >
          {options}
        </select>
      </div>
      <div className="ctrl">
        <label htmlFor="font-size">Time</label>
        <select
          id="font-size"
          className="slct slct-secondary"
          defaultValue={defaultTime}
          onChange={handleDurationChange}
        >
          {timeOptions}
        </select>
      </div>
    </div>
  );
};
