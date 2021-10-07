import React from "react";
import "./index.css";
import { DialogHeader, DialogTitle } from "./index.style";
import CloseIcon from "../../icons/closeIcon.svg";

interface BasicDialogProps {
  dialogIsOpen: boolean;
  onClose: () => void;
  bodyContent: React.ReactChild;
  dialogTitle: string;
}

export const BasicDialog = ({
  dialogIsOpen,
  onClose,
  bodyContent,
  dialogTitle,
}: BasicDialogProps): JSX.Element => {
  return (
    <>
      {dialogIsOpen && (
        <div
          className="backgroundWall"
          style={{
            animationName: dialogIsOpen ? "backgroundWallAnimation" : "",
          }}
        >
          <div
            className="dialogContent"
            style={{
              animationName: dialogIsOpen ? "blurAnimation" : "",
              backgroundColor: "white",
              position: "relative",
            }}
          >
            <DialogHeader>
              <button
                type="button"
                onClick={onClose}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src={CloseIcon} alt="close" />
              </button>
            </DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            {bodyContent}
          </div>
        </div>
      )}
    </>
  );
};

export default BasicDialog;
