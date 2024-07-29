import IconButton from "../IconButton";

function ContactHeader({ selectPage }) {
  return (
    <div className="d-flex px-2 py-4 w-100 d-flex justify-content-between">
      <IconButton
        onClick={() => {
          selectPage("chat");
        }}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
      <IconButton
        onClick={() => {
          selectPage("chat");
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
  );
}

export default ContactHeader;
