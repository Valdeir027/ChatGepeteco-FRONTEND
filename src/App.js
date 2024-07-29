import { createContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Loading from "./components/Loading";
import LaterialBar from "./components/LaterialBar";
import Pages from "./components/Pages";
import NotificationList from "./components/notifications/NotificationList";

export const appContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState("chat");
  const [ws, setWs] = useState(null);

  const selectPage = (value) => {
    console.log("valor que vem do value ", value);
    setPage(value);
  };

  useEffect(() => {
    console.log("useEffect");
    const socket = new WebSocket(
      "wss://31be82ff-c871-47c1-87d1-e7942e6a083e-00-20rx2avnby5se.kirk.replit.dev/ws/chat/",
    );

    socket.onopen = () => {
      setWs(socket);
      setIsLoading(false);
    };
    socket.onmessage = (e) => {
      console.log("Received message:", e.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <appContext.Provider value={{ ws, setWs }}>
      <div className="app">
        <NotificationList />
      </div>
      <div className="container-fluid d-flex vh-100 flex justify-content-center align-items-center bg-secondary box-shadow">
        <div className="main d-flex flex" style={style.main}>
          <LaterialBar selectPage={selectPage} />
          <Pages page={page} selectPage={selectPage} />
        </div>
      </div>
    </appContext.Provider>
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
