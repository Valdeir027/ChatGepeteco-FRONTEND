import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Loading from "./componets/Loading";
import LaterialBar from "./componets/LaterialBar";
import Pages from "./componets/Pages";

function App() {
  // var web = new WebSocket("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState("chat");

  const selectPage = (value) => {
    console.log("valor que vem do value ", value);
    setPage(value);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" container-fluid d-flex vh-100 flex justify-content-center align-items-center  bg-secondary box-shadow">
      <div className="main d-flex flex" style={style.main}>
        <LaterialBar selectPage={selectPage}></LaterialBar>
        <Pages page={page} selectPage={selectPage}></Pages>
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
