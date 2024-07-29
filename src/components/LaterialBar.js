import Nav from "./Nav";

function LaterialBar({ selectPage }) {
  return (
    <div className="p-2" style={styles.appbar}>
      <div
        className="h-25 d-flex aling-itens-center justify-content-center"
        style={styles.actions}
      >
        <Nav selectPage={selectPage}></Nav>
      </div>
    </div>
  );
}

const styles = {
  appbar: {
    width: "60px",
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
