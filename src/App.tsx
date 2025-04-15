"use client";

import "./App.css";
import ListCard from "../components/ListCard";
import { useState } from "react";

function App() {
  const [demoData, setDemoData] = useState({
    title: "Groceries",
    listItems: ["Bananas", "Apples", "Plums", "Chocolate"],
  });

  return (
    <main>
      <section>
        <ListCard cardData={demoData} editData={setDemoData} />
      </section>
    </main>
  );
}

export default App;
