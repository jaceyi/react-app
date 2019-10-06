import * as React from 'react';
import './HelloReact.scss';
import Button from '@/components/Button/Button';
import { Link } from 'react-router-dom';

const { useEffect, useState } = React;

let timer: number = 0;

function clearTimer() {
  clearTimeout(timer);
}

function HelloReact() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    clearTimer();

    timer = window.setTimeout(() => {
      setTime(time + 1);
    }, 1000);

    return clearTimer;
  }, [time]);

  return (
    <div className="hello-react">
      <h1 className="title">Hello React App {time}s</h1>
      <div className="footer">
        <Link to="/">
          <Button type="primary">Go back</Button>
        </Link>
      </div>
    </div>
  );
}

export default HelloReact;
