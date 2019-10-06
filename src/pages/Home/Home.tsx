import * as React from 'react';
import { REG_EXP_EMAIL } from '@/utils/consts';
import * as reactImage from '@/assets/images/react.png';
import Button from '@/components/Button/Button';
import { Link } from 'react-router-dom';

const { useState } = React;

function Home() {
  const [active, setActive] = useState(false);

  function handleChange({ target }) {
    if (target.value && !REG_EXP_EMAIL.test(target.value)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <div>
      <div className="image-box">
        <img className="react-image" src={reactImage} alt=""/>
      </div>
      <input
        className={`input ${active ? 'error' : ''}`}
        type="text"
        placeholder="Input email"
        onChange={handleChange}
      />
      <div className="footer">
        <Link to="/HelloReact">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
