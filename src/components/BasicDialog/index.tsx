import React from "react";
import {
  BackgroundWall,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./index.style";
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
        <BackgroundWall dialogIsOpen={dialogIsOpen}>
          <DialogContent>
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
          </DialogContent>
        </BackgroundWall>
      )}
    </>
  );
};

export default BasicDialog;
