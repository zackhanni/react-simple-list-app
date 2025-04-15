import "./App.css";
import ListCard from "../components/ListCard";

const demoData = {
  title: "Groceries",
  list: ["Bananas", "Apples", "Plums", "Chocolate"],
};

function App() {
  return (
    <main>
      <section>
        <ListCard cardData={demoData} />
      </section>
    </main>
  );
}

export default App;
