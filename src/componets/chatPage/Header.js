import IconButton from "../IconButton";

function Header({ SelectPage }) {
  return (
    <div
      className=" d-flex w-100  aling-itens-center justify-content-between"
      style={styles.main}
    >
      {/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2185454658. */}
      <div className="Text text-ligth">
        <h4>Chats</h4>
      </div>
      <div className="aling-itens-center d-flex" style={styles.actions}>
        <div className="mx-2">
          <IconButton
            hoverColor="#fff"
            onClick={() => {
              SelectPage("contact");
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                style={{
                  color: "#34414a",
                }}
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            }
          ></IconButton>
        </div>
        <div className="mx-2">
          <IconButton
            hoverColor="#fff"
            onClick={() => {
              alert("botão 2");
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                style={{
                  color: "#34414a",
                }}
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            }
          ></IconButton>
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    margin: 5,
  },
  actions: {
    margin: 0,
  },
};

export default Header;
