import React, { useState } from 'react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </div>
    </div>
  );
};

export default Home;
