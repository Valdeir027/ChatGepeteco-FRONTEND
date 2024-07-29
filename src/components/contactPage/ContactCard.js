function ContactCard({ nome, numero }) {
  return (
    <div
      className="d-flex justify-content-between align-items-center boder-bottom border-light p-2 w-100"
      style={sytles.main}
    >
      <div className="d-flex align-items-center ">
        <div className="mx-2 text-secondary">
          <img src="user.svg" alt="" />
        </div>
        <div
          className="d-flex"
          onClick={() => {
            alert("Futuramente deve abrir a tela de chat");
          }}
        >
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <b className="">{nome}</b>
            </div>
            <div className="d-flex align-items-center">
              <p className="text-body-secondary">{numero}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const sytles = {
  main: {
    cursor: "pointer",
  },
};

export default ContactCard;
