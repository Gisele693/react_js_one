import React, { useState, useEffect, useContext, createContext } from 'react';

// 1. Creating a Context for global state
const CountContext = createContext();

function App() {
  // 2. useState: Local state to handle count value
  const [count, setCount] = useState(0);

  // 3. useEffect: Side effect for logging count when it changes
  useEffect(() => {
    console.log(`Count updated to: ${count}`);
  }, [count]);  // This effect runs when `count` changes

  // 4. Context Provider to pass down the state to child components
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div>
        <h1>Masengesho Gisele : L5 SOD</h1>
        <h1>React Hooks Demo</h1>
        <p>Current Count: {count}</p>

        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <Child />
      </div>
    </CountContext.Provider>
  );
}

// 5. A child component that consumes the count value from context
function Child() {
  const { count } = useContext(CountContext);  // useContext: Consuming the context value

  return (
    <div>
      <h2>Child Component</h2>
      <p>Count from Context: {count}</p>
    </div>
  );
}

export default App;
