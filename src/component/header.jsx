import "../styles/header.scss";
/**
 * @author Pankaj Kumar
 * @email kumar.pankaj0110@gmail.com
 * @returns
 */
export const Header = ({
  remainingtime,
  starttest,
  starttime,
  restart,
  conclude,
}) => {
  const seconds = remainingtime / 1000;
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds - minutes * 60;
  const started = starttime > 0;
  const handleClick = () => {
    started ? restart() : starttest();
  };
  return (
    <div className="header">
      <div className="left">Magic keys</div>
      <div>{`${minutes} min. ${displaySeconds} sec.`}</div>
      <div className="right">
        <button
          className={`btn ${started ? "btn-black" : "btn-primary"}`}
          onClick={handleClick}
        >
          {started > 0 ? "Restart" : "Start Test"}
        </button>
        {started && (
          <button className="btn btn-primary" onClick={conclude}>
            End test
          </button>
        )}
      </div>
    </div>
  );
};
