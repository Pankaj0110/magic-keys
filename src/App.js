import { useState, useEffect, useCallback, useRef } from "react";
import { Header, TextArea, Footer, Popup, Sounds } from "./component";
import {
  getCurrentTime,
  defaultSize,
  defaultTime,
  getResults,
  getPopupData,
} from "./utils";
import "./App.scss";

/**
 * @author Pankaj Kumar
 * @email kumar.pankaj0110@gmail.com
 * @returns
 */
function App() {
  const [fontSize, setFontSize] = useState(defaultSize);
  const [startTime, setStartTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [duration, setDuration] = useState(defaultTime);
  const [text, updateTextValue] = useState("");
  const [result, updateResult] = useState({});

  const [intervalId, setIntervalId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const [modalData, setModalData] = useState(null);

  const textRef = useRef(null);

  useEffect(() => {
    return function cleanup() {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [intervalId, timeoutId]);

  /**
   * handling the timeout and Timer display logic.
   */
  const startTest = () => {
    //textRef.current.disabled = false;
    updateTextValue("");
    textRef.current.value = "";
    const onSubmitOnTimeOver = () => {
      // textRef.current.disabled = true;
      setModalData(null);
    };
    setStartTime(() => getCurrentTime());
    let total = 1000 * 60 * duration;
    let interval = setInterval(() => {
      total = total - 1000;
      setRemainingTime(total);
      textRef.current.focus();
    }, 1000);

    let timeout = setTimeout(() => {
      clearInterval(interval);
      setModalData(
        getPopupData(
          "Time Over", //title
          `${duration} ${
            duration <= 1 ? "minute is" : "minutes are"
          } over , click Ok! Click on "End Test" at Top Right to get results.`, //body
          false, // show cancel button
          true, // show submit button
          onCloseModal, // on cancel button click
          onSubmitOnTimeOver // onSubmit button click
        )
      );
      updateResult(getResults(textRef.current.value, duration)); // ref is used to avoid the clousure
    }, 1000 * 60 * duration);
    
    setIntervalId(interval);
    setTimeoutId(timeout);
  };

  const conclude = useCallback(() => {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    updateResult(getResults(text, duration));
  }, [intervalId, timeoutId, text, duration]);

  const restart = () => {
    const onSubmit = () => {
      updateResult({});
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      onCloseModal();
      startTest();
    };
    setModalData(
      getPopupData(
        "Restart Test", //title
        `You are about to restart the Test! You will loose the current progress.`, //body
        true, // show cancel button
        true, // show submit button
        onCloseModal, // on cancel button click
        onSubmit // onSubmit button click
      )
    );
  };

  const updateText = (e) => {
    if(remainingTime > 0)
    updateTextValue(e.target.value);
  };

  const onCloseModal = () => {
    setModalData(null);
  };

  return (
    <div className="wrapper">
      {modalData && (
        <Popup
          title={modalData.title}
          body={modalData.body}
          onCancel={modalData.onCancel}
          onSubmit={modalData.onSubmit}
          showCancel={modalData.showCancel}
          showSubmit={modalData.showSubmit}
        ></Popup>
      )}
      <Header
        remainingtime={remainingTime}
        starttest={startTest}
        starttime={startTime}
        restart={restart}
        conclude={conclude}
      />
      <TextArea fontsize={fontSize} updatetext={updateText} text={text} ref={textRef} />
      <Footer
        handlefontsize={setFontSize}
        starttime={startTime}
        conclude={conclude}
        setduration={setDuration}
        result={result}
      />
    </div>
  );
}

export default App;
