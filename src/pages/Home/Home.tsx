import './Home.scss';
import * as React from 'react';
import { REG_EXP_EMAIL } from '@/utils/consts';
import * as reactImage from '@/assets/images/react.png';
import Button from '@/components/Button/Button';
import { Link } from 'react-router-dom';
import store from '@/store';

const { useContext, useEffect } = React;

const { useState } = React;

function Home() {
  const [status, setStatus] = useState<Number>(0);
  const [value, setValue] = useState('');
  const [state, setState] = useContext(store);

  useEffect(() => {
    if (!value) return setStatus(0);
    if (REG_EXP_EMAIL.test(value)) {
      setStatus(1);
      const name = value.split('@')[0];
      setState({
        userInfo: {
          email: value,
          name: name.charAt(0).toUpperCase() + name.slice(1)
        }
      });
    } else {
      setStatus(2);
    }
  }, [value]);

  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <div>
      <div className="image-box">
        <img className="react-image" src={reactImage} alt="" />
      </div>
      <input
        className={`input ${status === 2 ? 'error' : ''}`}
        type="text"
        placeholder="Input email"
        onChange={handleChange}
      />
      {status === 1 && (
        <div className="footer">
          <Link to="/Hello">
            <Button type="primary">Login</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
