"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ListCard = ({ cardData, updateList }) => {
  // const { id, title, list } = cardData;

  const [title, setTitle] = useState(cardData.title);
  const [list, setList] = useState(cardData.list);
  const [id, setId] = useState(cardData.id);
  const [newItem, setNewItem] = useState("");

  const removeItem = (index: number) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const addItem = (newItem: string) => {
    const updatedList = [...list];
    updatedList.push({ id: uuidv4(), name: newItem, finished: false });
    setList(updatedList);
    setNewItem("");
  };

  const handleSave = () => {
    updateList({ id, title, list });
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

        {cardData.list != list && (
          <button onClick={() => handleSave()}>Save changes</button>
        )}
      </div>

      <form>
        {list.map(
          (
            {
              id,
              name,
              finished,
            }: { id: number; name: string; finished: boolean },
            index: number
          ) => (
            <p key={id} className="card-list-item">
              <input
                type="checkbox"
                defaultChecked={finished}
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
