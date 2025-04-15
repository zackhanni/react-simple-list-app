"use client";

import "./App.css";
import ListCard from "../components/ListCard";
import { useState } from "react";

function App() {
  const [allData, setAllData] = useState([
    {
      cardTitle: "Groceries",
      listItems: [
        { name: "Bananas", finished: false },
        { name: "Apples", finished: false },
        { name: "Chocolate", finished: true },
        { name: "Milk", finished: false },
      ],
    },
    {
      cardTitle: "Electronics",
      listItems: [
        { name: "Computer", finished: true },
        { name: "Phone", finished: false },
        { name: "Television", finished: true },
        { name: "Headphones", finished: false },
      ],
    },
  ]);

  return (
    <main>
      <section className="cards">
        <ListCard
          cardData={{
            cardTitle: "",
            listItems: [],
          }}
          saveData={setAllData}
        />
        {allData.map((listCard, index) => (
          <ListCard cardData={listCard} saveData={setAllData} />
        ))}
      </section>
    </main>
  );
}

export default App;
