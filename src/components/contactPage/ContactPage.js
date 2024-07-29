import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import ContactHeader from "./ContactHeader";

function ContactPage({ selectPage }) {
  const styles = {
    main: {
      backgroundColor: "#DCDCDC",
    },
  };

  return (
    <div className="d-flex flex-column h-100  px-2 w-25" style={styles.main}>
      <ContactHeader selectPage={selectPage}></ContactHeader>
      <div className="w-100 h-100">
        <ContactCard nome="Contato 1" numero={"(95) 99999-9999"}></ContactCard>
        <ContactCard nome="Contato 2" numero={"(95) 99999-9999"}></ContactCard>
        <ContactCard nome="Contato 3" numero={"(95) 99999-9999"}></ContactCard>
        <ContactCard nome="Contato 4" numero={"(95) 99999-9999"}></ContactCard>
      </div>
    </div>
  );
}

export default ContactPage;
