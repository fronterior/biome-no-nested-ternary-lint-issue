import { useState } from 'react';
import './App.css';

const App = () => {
  const [bool, setBool] = useState(false);

  const case1 = bool ? (Math.random() ? 1 : 2) : 3;
  const case2 = bool ? 1 : Math.random() ? 2 : 3;

  return (
    <button type="button" onClick={() => setBool((val) => !val)}>
      {case1} {case2}
    </button>
  );
};

export default App;
