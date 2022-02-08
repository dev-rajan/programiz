import React from "react";
import { toast } from "react-toastify";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiAlertTriangle,
  FiX,
} from "react-icons/fi";

import { TOAST_STATES } from "constants/consts";

// This container required for the first parameter of the toast function
const Container = (props) => <div>{props.children}</div>;

const useToast = (
  message,
  toastState = TOAST_STATES.SUCCESS,
  toastId = "customId"
) => {
  const toastProps = {
    icon: false,
    closeButton: false,
    limit: 1,
    toastId: toastId,
    autoClose: 5000,
  };
  // destructuring props

  // state

  // effect

  // other variables/functions
  const toastIcon =
    toastState === TOAST_STATES.SUCCESS ? (
      <FiCheckCircle size={24} />
    ) : toastState === TOAST_STATES.ERROR ? (
      <FiAlertTriangle size={24} />
    ) : (
      <FiAlertCircle size={24} />
    );

  // render
  const toastContent = (
    <Container>
      <div
        className={`toast mb-2x ${
          toastState === TOAST_STATES.SUCCESS
            ? "toast--success"
            : toastState === TOAST_STATES.ERROR
            ? "toast--danger"
            : "toast--yellow"
        } `}
      >
        <div className="toast__icon">{toastIcon}</div>
        <div className="toast__body">
          <p className="toast__message">{message}</p>
        </div>
        <div className="toast__close">
          <FiX className="close-icon" />
        </div>
      </div>
    </Container>
  );

  return toastState === TOAST_STATES.SUCCESS
    ? toast.success(toastContent, toastProps)
    : toastState === TOAST_STATES.ERROR
    ? toast.error(toastContent, toastProps)
    : toast.info(toastContent, toastProps);
};

export default useToast;
