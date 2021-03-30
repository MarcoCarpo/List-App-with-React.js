import Modal from "../../components/Modal";
import Form from "../../components/Form";
import Filter from "../../components/Filter";
import ItemContainer from "../ItemContainer";

function App() {
  return (
    <main className="app">
      <div className="background"></div>
      <section className="app__container">
        <h1 className="app__name">Shopping List App</h1>
        <Form />
        <Filter />
        <Modal />
        <ItemContainer />
      </section>
    </main>
  );
}

export default App;
