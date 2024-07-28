export default function Nav({ selectPage }) {
  const chatButtonClick = (value) => {
    selectPage(value);
  };

  return (
    <div>
      <button
        className="btn btn-light my-2"
        style={styles.button}
        onClick={() => {
          chatButtonClick("chat");
        }}
      >
        <i class="bi bi-chat-square-fill"></i>
      </button>
      <button
        className="btn btn-light my-2"
        style={styles.button}
        onClick={() => {
          chatButtonClick("contact");
        }}
      >
        <i class="bi bi-person-lines-fill"></i>
      </button>
    </div>
  );
}

const styles = {
  appbar: {
    width: "5%",
    height: "100%",
  },
  button: {
    color: "#007bff",
  },
  actions: {
    margin: "5",
  },
};
