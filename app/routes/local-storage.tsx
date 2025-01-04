import { useEffect, useState } from 'react';

export default function LocalStorage() {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  useEffect(() => {
    const backgroundColor = window.localStorage.getItem('background');
    setBackgroundColor(backgroundColor || '');
  }, []);

  const localStorageSet = () => {
    window.localStorage.setItem('background', 'red');
  };
  return (
    <div style={{ backgroundColor }}>
      <h1>local-storage</h1>
      <button onClick={localStorageSet}>Set background color</button>
    </div>
  );
}
