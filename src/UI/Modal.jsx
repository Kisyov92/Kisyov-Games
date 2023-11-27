/* eslint-disable react/prop-types */

import classes from "./Modal.module.css";

function Modal({ children, className }) {
  let cssClasses = classes.modal;

  if (className) cssClasses += ` ${className}`;

  return <div className={cssClasses}>{children}</div>;
}

export default Modal;
