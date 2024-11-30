import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ fontSize: '24px', margin: '20px' }}>{count}</div>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        Reset
      </button>
    </div>
  );
}

export default CounterApp;
