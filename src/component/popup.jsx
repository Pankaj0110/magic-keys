import { createPortal } from "react-dom";

import "../styles/modal.scss";
/**
 * @author Pankaj Kumar
 * @email kumar.pankaj0110@gmail.com
 * @returns
 */
const Modal = ({ title, body, onSubmit, onCancel, showSubmit, showCancel }) => {
  return (
    <div className="modal">
      <div className="title">{title}</div>
      <div className="content">{body}</div>
      <div className="modal-footer">
        {showSubmit && (
          <button className="btn btn-primary btn-primary-sm" onClick={onSubmit}>
            Ok
          </button>
        )}
        {showCancel && (
          <button className="btn btn-default btn-default-sm" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export const Popup = ({
  title,
  body,
  onCancel,
  onSubmit,
  showCancel,
  showSubmit,
}) => {
  let elm = document.getElementById("overlay-root");
  return createPortal(
    <div className="popup-overlay">
      <Modal
        title={title}
        body={body}
        onCancel={onCancel}
        onSubmit={onSubmit}
        showCancel={showCancel}
        showSubmit={showSubmit}
      ></Modal>
    </div>,
    elm
  );
};
