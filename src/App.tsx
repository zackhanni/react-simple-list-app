"use client";

import "./App.css";
import ListCard from "../components/ListCard";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Card = {
  id: string;
  cardTitle: string;
  listItems: {
    id: string;
    name: string;
    finished: boolean;
  }[];
};

function App() {
  const [allData, setAllData] = useState([
    {
      id: uuidv4(),
      cardTitle: "Groceries",
      listItems: [
        { id: uuidv4(), name: "Bananas", finished: false },
        { id: uuidv4(), name: "Apples", finished: false },
        { id: uuidv4(), name: "Chocolate", finished: true },
        { id: uuidv4(), name: "Milk", finished: false },
      ],
    },
    {
      id: uuidv4(),
      cardTitle: "Electronics",
      listItems: [
        { id: uuidv4(), name: "Computer", finished: true },
        { id: uuidv4(), name: "Phone", finished: false },
        { id: uuidv4(), name: "Television", finished: true },
        { id: uuidv4(), name: "Headphones", finished: false },
      ],
    },
  ]);

  const updateList = (updatedList: Card) => {
    const updatedAllData = [...allData];
    const listIndex = updatedAllData.findIndex(
      (obj) => obj.id === updatedList.id
    );
    updatedAllData[listIndex] = updatedList;
    setAllData(updatedAllData);
  };

  return (
    <main>
      <section className="cards">
        <ListCard
          cardData={{
            id: uuidv4(),
            cardTitle: "",
            listItems: [],
          }}
          updateList={updateList}
        />
        {allData.map((listCard) => (
          <ListCard cardData={listCard} updateList={updateList} />
        ))}
      </section>
    </main>
  );
}

export default App;
