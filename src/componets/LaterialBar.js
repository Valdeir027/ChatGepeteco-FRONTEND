function LaterialBar(params) {
  return (
    <div style={styles.appbar}>
      <div className="h-25" style={styles.actions}>
        <button className="btn btn-light" style={styles.button}>
          <i class="bi bi-chat-square-fill"></i>
        </button>
      </div>
    </div>
  );
}

const styles = {
  appbar: {
    width: "20%",
    height: "100%",
  },
  button: {
    color: "#007bff",
  },
  actions: {
    margin: "5",
  },
};

export default LaterialBar;
