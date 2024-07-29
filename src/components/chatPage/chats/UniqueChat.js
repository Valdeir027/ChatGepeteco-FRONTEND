import { Divider } from "@mui/joy";
import { useState } from "react";

export default function UniqueChat({ title, messagem }) {
  const [isHover, setIsHover] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const hoverIcon = () => {
    if (isHover === false) {
      setIsHover(true);
      setIsAnimated(true);
      setTimeout(() => {
        setIsAnimated(false);
      }, 200);
    }
    if (isHover === true) {
      setIsHover(false);
    }
  };

  const sytles = {
    main: {
      backgroundColor: "",
      cursor: "pointer",
    },
    icon: {
      transition: "transform 0.2s ease-in-out, opacity 0.2s ease-in-out",
      transform: isAnimated ? "translateY(5px)" : "translateY(0px)",
      opacity: isAnimated ? 0 : 1,
    },
  };

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center w-100"
        style={sytles.main}
        onMouseEnter={() => {
          console.log(title, "teste");
          hoverIcon();
        }}
        onMouseLeave={() => {
          hoverIcon();
        }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="mx-2 text-secondary">
            <img src="user.svg" alt="" />
          </div>
          <div
            className="d-flex"
            onClick={() => {
              alert("Futuramente deve abrir a tela de chat");
            }}
          >
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <b className="">{title}</b>
              </div>
              <div className="d-flex align-items-center">
                <p className="text-body-secondary">{messagem}</p>
              </div>
            </div>
          </div>
        </div>
        {isHover && <i class="bi bi-chevron-up" style={sytles.icon}></i>}
      </div>
      <Divider></Divider>
    </>
  );
}
