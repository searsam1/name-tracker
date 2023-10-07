import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [name, setName] = useState('')
  const [names, setNames] = useState([])

  const generateId = () => {
    return uuidv4();
  }
  
  const handleEnterPress = (event) => {
    if(event.key === 'Enter') {
      setNames((prev) => [...prev, { id: generateId(), name: name }])
      setName('')
    }
  }

  const handleClick = () => {
    setNames((prev) => [...prev, { id: generateId(), name: name }])
    setName('')
  }

  const removeName = (id) => {
    setNames((prev) => prev.filter((name) => name.id !== id))
  }

  return (
    <div className="App">
      <h2>Name Tracker</h2>
      <input
        onChange={({ target }) => setName(target.value)}
        onKeyDown={handleEnterPress}
        placeholder='Name'
        value={name}
      />
      <button onClick={handleClick}>
        Set Names
      </button>
      <div className='nameBox'>
        <h3>Names</h3>
        <div>
          {names.map(
            ({ id, name }) =>
              <div key={id}>
                <button 
                  onClick={() => removeName(id)}
                  aria-label={`Remove name ${name}`}
                >
                  {name}
                </button>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
