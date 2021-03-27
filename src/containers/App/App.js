import Modal from "../../components/Modal";
import Form from "../../components/Form";
import Filter from "../../components/Filter";
import ItemContainer from "../ItemContainer";

function App() {
  return (
    <main className="app">
      <section className="app__container">
        <Modal />
        <Form />
        <Filter />
        <ItemContainer />
      </section>
    </main>
  );
}

export default App;
