import { hot } from 'react-hot-loader/root';
import * as React from 'react';

const { useEffect, useState } = React;

let timer: number = 0;

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  return (
    <div>
      <h1 className="title">Hello React App {time}s</h1>
    </div>
  )
}

export default hot(App);
