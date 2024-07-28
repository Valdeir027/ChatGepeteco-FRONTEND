import { useState } from "react";

export default function IconButton({ icon, onClick }) {
  const [isHoverButton, setIsHoverButton] = useState(false);
  return (
    <button
      className="btn"
      style={{
        backgroundColor: isHoverButton ? "#999999de" : "",
        borderRadius: 50,
        color: isHoverButton ? "#fff" : "",
        padding: 0,
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHoverButton(true)}
      onMouseLeave={() => setIsHoverButton(false)}
    >
      {icon}
    </button>
  );
}
