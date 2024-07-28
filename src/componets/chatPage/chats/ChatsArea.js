import UniqueChat from "./UniqueChat";

export default function ChatsArea() {
  return (
    <div className=" w-100" style={styles.main}>
      <UniqueChat
        title="Contato_1"
        messagem="Uma primeira mensagem"
      ></UniqueChat>
      <UniqueChat
        title="Contato_2"
        messagem="Uma segunda mensagem"
      ></UniqueChat>
      <UniqueChat
        title="Contato_3"
        messagem="Uma terceira mensagem"
      ></UniqueChat>
    </div>
  );
}

const styles = {
  main: {
    height: "85%",
    overflow: "auto",
  },
};
