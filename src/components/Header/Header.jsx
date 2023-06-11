import { useState } from 'react';

const Header = ({ onSubmitText }) => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSubmitText({ id: crypto.randomUUID(), name, completed: false });

    setName('');
  }

  return (
    <div className="header">
      <h1>🛒 Shopping List</h1>

      <form className="form__input" onSubmit={handleSubmit}>
        <label>What you'd like to shop?</label>
        <input
          type="text"
          value={name}
          autoFocus
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Header;
