export const ListCard = ({ cardData }) => {
  const { title, list } = cardData;

  return (
    <div className="card">
      <h2>{title}</h2>
      {list.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </div>
  );
};

export default ListCard;
