import { useState, useRef, useEffect } from "react";

export const Sounds = () => {
  const [isPlayAll, setPlayAll] = useState(false);
  const [isTyping, setTyping] = useState(false);
  const [isOffice, setOffice] = useState(false);
  const [isCrowd, setCrowd] = useState(false);

  const keyboardRef = useRef(null);
  const officeRef = useRef(null);
  const crowdRef = useRef(null);

  useEffect(() => {
    isTyping && keyboardRef.current
      ? keyboardRef.current.play()
      : keyboardRef.current.pause();
    isOffice && officeRef.current
      ? officeRef.current.play()
      : officeRef.current.pause();
    isCrowd && crowdRef.current
      ? crowdRef.current.play()
      : crowdRef.current.pause();
  }, [isTyping, isOffice, isCrowd]);

  const handleTypingEffect = () => setTyping(!isTyping);
  const handleOfficeEffect = () => setOffice(!isOffice);
  const handleCrowdEffect = () => setCrowd(!isCrowd);
  const handlePlayAll = () => {
    setPlayAll(!isPlayAll);
    setTyping(!isPlayAll);
    setCrowd(!isPlayAll);
    setOffice(!isPlayAll);
  };

  return (
    <div>
      <div className="ctrl">
        <label htmlFor="play-all">All</label>
        <input
          type="checkbox"
          className="pink-checkbox"
          name="play-all"
          checked={isPlayAll}
          onChange={handlePlayAll}
        />
      </div>
      <div className="ctrl">
        <label htmlFor="keyboard-noise">Keyboard</label>
        <input
          type="checkbox"
          className="pink-checkbox"
          name="keyboard-noise"
          checked={isTyping}
          onChange={handleTypingEffect}
        ></input>
        <audio
          controls
          loop
          id="keyboard-noise"
          className="control-hidden"
          ref={keyboardRef}
        >
          <source src="./keyboardSound.mp3" type="audio/mp3"></source>
        </audio>
      </div>
      <div className="ctrl">
        <label htmlFor="office-general-noise">Office</label>
        <input
          type="checkbox"
          className="pink-checkbox"
          name="office-general-noise"
          checked={isOffice}
          onChange={handleOfficeEffect}
        ></input>
        <audio
          controls
          loop
          id="office-general-noise"
          className="control-hidden"
          ref={officeRef}
        >
          <source src="./officeInstrument.mp3" type="audio/mp3"></source>
        </audio>
      </div>
      <div className="ctrl">
        <label htmlFor="crowd-noise">Crowd</label>
        <input
          type="checkbox"
          className="pink-checkbox"
          name="crowd-noise"
          checked={isCrowd}
          onChange={handleCrowdEffect}
        ></input>
        <audio
          controls
          loop
          id="crowd-noise"
          className="control-hidden"
          ref={crowdRef}
        >
          <source src="./crowd.mp3" type="audio/mp3"></source>
        </audio>
      </div>
    </div>
  );
};
