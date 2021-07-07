import { forwardRef } from "react";
import "../App.scss";
import { fontTest } from "../utils";
/**
 * @author Pankaj Kumar
 * @email kumar.pankaj0110@gmail.com
 * @returns
 */
export const TextArea = forwardRef(({ fontsize, updatetext, text }, ref) => {
  return (
    <div className="section">
      <textarea
        ref={ref}
        className="txtArea"
        style={{ fontSize: fontsize }}
        placeholder={fontTest}
        value={text}
        onChange={updatetext}
      />
    </div>
  );
});
