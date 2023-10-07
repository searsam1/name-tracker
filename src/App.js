import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('')
  const [names, setNames] = useState([])

  const handleClick = () => {
    setNames((prev) => [...prev, name])
    // reset name for input field
    // must have <input value={name} to work
    setName('')
  }

  return (
    <div className="App">
      <h2>Name Tracker</h2>
      <input
        onChange={({ target }) => setName(target.value)}
        placeholder='Name'
        value={name}
      />
      <button
        onClick={handleClick}>
        Set Names
      </button>
      <div className='nameBox'>
        <h3>Names</h3>
        <div>
          {names.map((name, idx) => <p key={idx}>{name}</p>)}
        </div>
      </div>
    </div>
  );
}

export default App;
