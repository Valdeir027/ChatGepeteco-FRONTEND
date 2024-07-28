import Header from "./Header";
import SeachBar from "./SeachBar";
import { useEffect, useState } from "react";
import ChatsArea from "./chats/ChatsArea";

function ChatsSession({ selectPage }) {
  const [search, setSearch] = useState([]);
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);

    // Remove a classe após a animação para permitir repetições
    setTimeout(() => {
      setIsAnimated(false);
    }, 500);
  }, []);

  const handleValueChange = (value) => {
    setSearch(value);
  };
  const onChange = () => {
    console.log(search);
  };
  const styles = {
    main: {
      transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
      height: isAnimated ? "100%" : "0%",
      overFlow: "hidden",
      backgroundColor: "#DCDCDC",
    },
  };

  return (
    <div className="d-flex h-100 w-25" style={styles.main}>
      <div className="m-4 my-3 w-100">
        <Header SelectPage={selectPage}></Header>
        <SeachBar
          setOnChange={handleValueChange}
          submtFunction={onChange}
        ></SeachBar>
        <ChatsArea></ChatsArea>
      </div>
    </div>
  );
}

export default ChatsSession;
