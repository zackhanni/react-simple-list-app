"use client";

import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { RiMenuAddLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbTrashXFilled } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";

interface CardData {
  id: string;
  title: string;
  list: Array<{ id: string; name: string; finished: boolean }>;
}

interface ListCardProps {
  cardData: CardData;
  updateList: (updatedData: CardData) => void;
  removeList?: (id: string) => void;
}

export const ListCard: React.FC<ListCardProps> = ({
  cardData,
  updateList,
  removeList,
}) => {
  // const { id, title, list } = cardData;

  const [title, setTitle] = useState(cardData.title);
  const [list, setList] = useState(cardData.list);
  const id = cardData.id;
  const [newItem, setNewItem] = useState("");

  const removeItem = (index: number) => {
    const updatedList = list;
    updatedList.splice(index, 1);
    setList(updatedList);
    handleSaveChanges();
  };

  const addItem = (newItem: string) => {
    const updatedList = list;
    updatedList.push({ id: uuidv4(), name: newItem, finished: false });
    setList(updatedList);
    setNewItem("");
    handleSaveChanges();
  };

  const handleSaveChanges = () => {
    updateList({ id, title, list });
  };

  return (
    <div className="card">
      <div className="card-title">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleSaveChanges}
          placeholder="Name your list"
        ></input>
      </div>

      <form>
        {list.map(
          (
            {
              id,
              name,
              finished,
            }: { id: string; name: string; finished: boolean },
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
                  handleSaveChanges();
                }}
              />
              <input
                type="text"
                className={finished ? "strike-through" : ""}
                value={name}
                onChange={(e) => {
                  e.preventDefault();
                  const updatedList = [...list];
                  updatedList[index].name = e.target.value;
                  setList(updatedList);
                  handleSaveChanges();
                }}
              ></input>

              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(index)}
              >
                <RxCross2 />
              </button>
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
          <button
            className="save-btn"
            type="button"
            onClick={() => addItem(newItem)}
          >
            <RiMenuAddLine />
          </button>
        </p>
      </form>
      {removeList && (
        <div className="card-footer">
          <button
            className="delete-entire-list-btn"
            type="button"
            onClick={() => removeList(id)}
          >
            Delete list
          </button>
        </div>
      )}
    </div>
  );
};

export default ListCard;
