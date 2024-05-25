// src/About.js
import React, { useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h2>About Page</h2>
      <div style={styles.counterSection}>
        <h3>Counter</h3>
        <p>{count}</p>
        <button onClick={increment} style={styles.button}>Increment</button>
        <button onClick={decrement} style={styles.button}>Decrement</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2em',
  },
  counterSection: {
    marginTop: '2em',
    padding: '1em',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  button: {
    margin: '0 0.5em',
    padding: '0.5em 1em',
    fontSize: '1em',
    cursor: 'pointer',
  },
};

export default About;
