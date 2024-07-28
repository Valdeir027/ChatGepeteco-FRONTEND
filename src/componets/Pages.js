import ContactPage from "./contactPage/ContactPage";
import ChatsSession from "./chatPage/ChatsSession";

export default function Pages({ page, selectPage }) {
  if (page === "chat") {
    return <ChatsSession selectPage={selectPage}></ChatsSession>;
  }
  if (page === "contact") {
    return <ContactPage selectPage={selectPage}></ContactPage>;
  }
}
