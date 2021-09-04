import Container from "./Components/Container";
import Form from "./Components/form";
import Filter from "./Components/filter";
import ContactList from "./Components/Phonebook";

export default function App() {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
