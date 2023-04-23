import React from 'react';
import { Input, Button } from 'antd';
import { useValues } from '@/hooks';
import styles from './style.module.scss';
import { useNavigate } from 'react-router';

const User = () => {
  const navigatev = useNavigate();

  const [{ username, password }, setValue] = useValues({
    username: '',
    password: ''
  });

  return (
    <div className={styles.container}>
      <Input
        className={styles.input}
        value={username}
        onChange={e =>
          setValue({
            username: e.target.value
          })
        }
      />
      <Input
        type="password"
        className={styles.input}
        value={password}
        onChange={e =>
          setValue({
            password: e.target.value
          })
        }
      />
      <Button
        onClick={() => navigatev(`/user/${encodeURIComponent(username)}`)}
        type="primary"
      >
        Submit
      </Button>
    </div>
  );
};

export default User;
