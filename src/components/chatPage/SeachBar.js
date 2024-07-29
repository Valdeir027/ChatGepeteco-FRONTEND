import { useState, useEffect, useRef } from "react";

export default function SeachBar({ setOnChange, submtFunction }) {
  const [variable, setVariable] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setVariable("");
    }
  };
  const handleChange = (event) => {
    setVariable(event.target.value);
    setOnChange(event.target.value);
    submtFunction();
  };
  const handleFocus = () => {
    setIsFocus(true);
    startAnimation();
  };

  const handleBlur = () => {
    setIsFocus(false);
    startAnimation();
  };
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const blurInput = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };
  const handleButtonClick = () => {
    if (isFocus === true) {
      blurInput();
      setVariable("");
    }
    if (isFocus === false) {
      focusInput();
    }
  };

  const startAnimation = () => {
    setIsAnimated(true);

    // Remove a classe após a animação para permitir repetições
    setTimeout(() => {
      setIsAnimated(false);
    }, 100); // O tempo deve corresponder à duração da animação
  };

  const style = {
    input: {
      height: 25,
      width: "90%",
      outline: "none",
      borderColor: "transparent",
    },
    button: {
      padding: 0,
      height: 25,
      outline: "none",
      justifyContent: "center",
      alignItems: "center",
      transition: isAnimated ? "transform 0.1s ease" : "none",
      // Adiciona a animação de "pular" se isAnimated for true
      transform: isAnimated ? "rotate(0deg)" : "rotate(360deg)",
      borderColor: "transparent",
    },
  };
  const handleButtonMouseDown = (event) => {
    event.preventDefault(); // Impede que o botão cause perda de foco
  };
  return (
    <div className=" d-flex justify-content-center w-100">
      <div
        class="input-group d-flex justify-content-center aling-itens-center w-100 mb-3"
        style={{
          background: "#E5E5E5",
          padding: 5,
          borderRadius: 50,
        }}
      >
        <input
          type="text"
          class="form-controt bg-transparent border-0"
          style={style.input}
          value={variable}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          placeholder="Pesquisar..."
          aria-label="Pesquisar...e"
          aria-describedby="button-addon2"
        />
        <button
          class="btn d-flex"
          type="button"
          style={style.button}
          id="button-addon2"
          onClick={handleButtonClick}
          onMouseDown={handleButtonMouseDown}
        >
          {isFocus ? (
            <i className="bi bi-arrow-left"></i>
          ) : (
            <i className="bi bi-search"></i>
          )}
        </button>
      </div>
    </div>
  );
}
