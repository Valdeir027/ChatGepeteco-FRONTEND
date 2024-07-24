import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Loading from "./componets/Loading";
import LaterialBar from "./componets/LaterialBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="d-flex vh-100 flex justify-content-center align-items-center  bg-secondary">
      <div className="" style={style.main}>
        <LaterialBar></LaterialBar>
      </div>
    </div>
  );
}

const style = {
  main: {
    width: "90%",
    height: "90%",
    background: "#fff",
  },
};
export default App;
