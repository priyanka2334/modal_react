import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      if (isEditing) {
        const updatedItems = items.map((item, index) => 
          index === editIndex ? inputValue : item
        );
        setItems(updatedItems);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setItems([...items, inputValue]);
      }
      setInputValue('');
      toggleModal();
    }
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInputValue(items[index]);
    setIsEditing(true);
    setEditIndex(index);
    toggleModal();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Header</h1>
        <button onClick={toggleModal}>Add Item</button>
      </header>
      <main>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter item"
            />
            <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Submit'}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;



