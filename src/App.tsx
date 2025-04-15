"use client";

import "./App.css";
import ListCard from "../components/ListCard";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Card = {
  id: string;
  title: string;
  list: {
    id: string;
    name: string;
    finished: boolean;
  }[];
};

const LOCAL_STORAGE_KEY = "myListAppData";

function App() {
  const [allData, setAllData] = useState<Card[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData != null) {
      setAllData(JSON.parse(savedData));
    } else {
      setAllData([
        {
          id: uuidv4(),
          title: "Groceries",
          list: [
            { id: uuidv4(), name: "Bananas", finished: false },
            { id: uuidv4(), name: "Apples", finished: false },
            { id: uuidv4(), name: "Chocolate", finished: true },
            { id: uuidv4(), name: "Milk", finished: false },
          ],
        },
        {
          id: uuidv4(),
          title: "Electronics",
          list: [
            { id: uuidv4(), name: "Computer", finished: true },
            { id: uuidv4(), name: "Phone", finished: false },
            { id: uuidv4(), name: "Television", finished: true },
            { id: uuidv4(), name: "Headphones", finished: false },
          ],
        },
      ]);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allData));
  // }, [allData]);

  const updateList = (updatedList: Card) => {
    const updatedAllData = [...allData];
    const listIndex = updatedAllData.findIndex(
      (obj) => obj.id === updatedList.id
    );
    updatedAllData[listIndex] = updatedList;
    setAllData(updatedAllData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allData));
  };

  return (
    <main>
      <section className="cards">
        <ListCard
          cardData={{
            id: uuidv4(),
            title: "",
            list: [],
          }}
          updateList={updateList}
        />
        {allData.map((listCard) => (
          <ListCard
            cardData={listCard}
            updateList={updateList}
            key={listCard.id}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
