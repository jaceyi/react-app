import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Button from '@/components/Button';
import { REG_EXP_EMAIL } from '@/utils/consts';
import * as styles from './style.module.scss';

const reactImage = require('@/assets/images/react.png');

const { useState } = React;

const Login = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('');

  const status = REG_EXP_EMAIL.test(value);
  const url = `/search?email=${encodeURIComponent(value)}`;

  return (
    <div>
      <div className={styles.logo}>
        <img className={styles.logo} src={reactImage} alt="React图片" />
      </div>
      <input
        value={value}
        className={styles.input}
        type="text"
        placeholder="Input email"
        onChange={({ target }) => setValue(target.value)}
        onKeyDown={e => {
          status && e.key === 'Enter' && navigate(url);
        }}
      />
      {status && (
        <div className={styles.handle}>
          <Link to={url}>
            <Button type="primary">Login</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
