import { useState } from 'react';
import Header from './components/Header/Header';
import ShoppingLists from './components/ShoppingLists/ShoppingLists';

const initialLists = [
  {
    id: 98753,
    name: 'Apple',
    completed: true,
  },
  {
    id: 776352,
    name: 'Rice & Beans',
    completed: false,
  },
];

export default function App() {
  const [lists, setLists] = useState(initialLists);

  function handleAddText(newList) {
    setLists((lists) => [newList, ...lists]);
  }

  const handleDelete = (id) => {
    setLists((lists) => lists.filter((list) => list.id !== id));
  };

  const handleCompletion = (id) => {
    setLists((lists) =>
      lists.map((list) => {
        list.id === id
          ? {
              ...list,
              completed: !list.completed,
            }
          : list;
      })
    );
  };

  return (
    <div className="app">
      <Header onSubmitText={handleAddText} />
      <ShoppingLists
        lists={lists}
        onDelete={handleDelete}
        onComplete={handleCompletion}
      />
    </div>
  );
}
