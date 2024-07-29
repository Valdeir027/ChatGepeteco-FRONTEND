// Notification.js
import React, { useEffect, useState } from "react";

const Notification = ({ id, message, onClose }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 5000);
  }, []);

  const styles = {
    main: {
      position: "fixed",
      top: 5,
      left: 5,
      transition: "transform 0.5s ease-in-out",
      transform: isAnimated ? "translateX(0)" : "translateX(-120%)",
    },
  };

  return (
    <div
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={styles.main}
    >
      <div class="toast-header">
        <svg
          class="bd-placeholder-img rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-body-secondary">2 seconds ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Heads up, toasts will stack automatically</div>
    </div>
  );
};
export default Notification;
