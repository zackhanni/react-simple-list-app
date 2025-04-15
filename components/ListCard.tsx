"use client";

import { useState } from "react";

export const ListCard = ({ cardData, saveData }) => {
  const { cardTitle, listItems } = cardData;

  const [title, setTitle] = useState(cardTitle);
  const [list, setList] = useState(listItems);
  const [newItem, setNewItem] = useState("");

  const removeItem = (index: number) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const addItem = (newItem: string) => {
    const updatedList = [...list];
    updatedList.push({ name: newItem, finished: false });
    setList(updatedList);
    setNewItem("");
  };

  const handleSave = (e) => {
    e.preventDefault();

    // save updated form to parent component
  };

  return (
    <div className="card">
      <div className="card-title">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Name your list"
        ></input>

        {listItems != list && (
          <button onClick={handleSave}>Save changes</button>
        )}
      </div>

      <form>
        {list.map(
          (
            { name, finished }: { name: string; finished: boolean },
            index: number
          ) => (
            <p key={index} className="card-list-item">
              <input
                type="checkbox"
                checked={finished}
                onClick={() => {
                  const updatedList = [...list];
                  updatedList[index].finished = finished ? false : true;
                  setList(updatedList);
                }}
              />
              <input
                type="text"
                className={finished ? "strike-through" : ""}
                value={name}
                onChange={(e) => {
                  const updatedList = [...list];
                  updatedList[index].name = e.target.value;
                  setList(updatedList);
                }}
              ></input>

              <button onClick={() => removeItem(index)}>Delete</button>
            </p>
          )
        )}
        <p className="card-list-item">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
          ></input>
          <button type="button" onClick={() => addItem(newItem)}>
            Save
          </button>
        </p>
      </form>
    </div>
  );
};

export default ListCard;
