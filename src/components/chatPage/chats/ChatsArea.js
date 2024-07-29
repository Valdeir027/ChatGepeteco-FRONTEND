import UniqueChat from "./UniqueChat";
import { useContext, useEffect, useState } from "react";
import { appContext } from "../../../App";
export default function ChatsArea() {
  const { ws } = useContext();
  const [rooms, setRooms] = useState([]);

  // Função para adicionar um novo item à lista
  const addItem = (room) => {
    setRooms((prevRoom) => [...prevRoom, room]);
  };

  useEffect(() => {
    if (ws !== null) {
      ws.onmessage = (e) => {
        var data = JSON.parse(e.data);
        if (data.rooms) {
          setRooms(data.rooms);
        }
        if (data.room) {
          addItem(data.room);
        }
      };
      ws.send(
        JSON.stringify({
          command: "getRooms",
        }),
      );
    }
  }, [ws]);
  return (
    <div className=" w-100" style={styles.main}>
      {rooms.map((room, index) => (
        <UniqueChat key={index} title={room.title} messagem="..."></UniqueChat>
      ))}
    </div>
  );
}

const styles = {
  main: {
    height: "85%",
    overflow: "auto",
  },
};
