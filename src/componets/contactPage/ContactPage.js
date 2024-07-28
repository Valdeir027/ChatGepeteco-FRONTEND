import IconButton from "../IconButton";

function ContactPage({ selectPage }) {
  return (
    <div className="d-flex flex-column h-100  px-2 w-25" style={styles.main}>
      <div className="d-flex px-2 py-4 w-100">
        <IconButton
          onClick={() => {
            selectPage("chat");
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          }
        ></IconButton>
      </div>
    </div>
  );
}

const styles = {
  main: {
    backgroundColor: "#DCDCDC",
  },
};
export default ContactPage;
