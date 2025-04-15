"use client";

import "./App.css";
import ListCard from "../components/ListCard";
import { useState } from "react";

function App() {
  const [allData, setAllData] = useState({
    cardTitle: "Groceries",
    listItems: [
      { name: "Bananas", finished: false },
      { name: "Apples", finished: false },
      { name: "Chocolate", finished: true },
      { name: "Milk", finished: false },
    ],
  });

  return (
    <main>
      <section>
        <ListCard cardData={allData} saveData={setAllData} />
      </section>
    </main>
  );
}

export default App;
