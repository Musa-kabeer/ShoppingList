import List from './List';

const ShoppingLists = ({ lists, onDelete, onComplete }) => {
  return (
    <>
      <p className="instruction">
        Shopping length can't exceed 7 lists ❌, else the last value
        got remove instantly 😅.
      </p>

      <ul>
        {lists.map((list) => (
          <List
            key={list.id}
            list={list}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </ul>
    </>
  );
};

export default ShoppingLists;
