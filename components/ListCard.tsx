"use client";

import { useCallback, useState } from "react";

export const ListCard = ({ cardData, editData }) => {
  const { title, listItems } = cardData;
  const [list, setList] = useState(listItems);
  const [newItem, setNewItem] = useState("");

  const handleChange = useCallback(
    (index: number, newValue: string) => {
      const updatedList = [...list];
      updatedList[index] = newValue;
      setList(updatedList);
    },
    [list]
  );

  const removeItem = (index: number) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const addItem = (newItem: string) => {
    const updatedList = [...list];
    updatedList.push(newItem);
    setList(updatedList);
    setNewItem("");
  };

  return (
    <div className="card">
      <div className="card-title">
        <h2>{title}</h2>
        {listItems != list && <button>Save changes</button>}
      </div>

      <form>
        {list.map((item: string, index: number) => (
          <p key={item} className="card-list-item">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={item}
            ></input>

            <button onClick={() => removeItem(index)}>Delete</button>
          </p>
        ))}
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
