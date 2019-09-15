import * as React from 'react';
import { REG_EXP_EMAIL } from '@/utils/consts';

const { useEffect, useState } = React;

let timer: number = 0;

function App() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  function handleChange({ target }) {
    if (target.value && !REG_EXP_EMAIL.test(target.value)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <div>
      <h1 className="title">Hello React App {time}s</h1>
      <input
        className={`input ${active ? 'error' : ''}`}
        type="text"
        placeholder="input email"
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
