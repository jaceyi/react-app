import * as React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import reactImage from '@/assets/images/react.png';
import Button from '@/components/Button';
import { REG_EXP_EMAIL } from '@/utils/consts';
import * as styles from './styles/index.scss';
import { useMemo } from 'react';

const { useState } = React;

const Home = () => {
  const history = useHistory();
  const [value, setValue] = useState('');

  const { status, url } = useMemo(() => {
    return {
      status: REG_EXP_EMAIL.test(value),
      url: `/search?email=${encodeURIComponent(value)}`
    };
  }, [value]);

  return (
    <div>
      <div className={styles.image_box}>
        <img className={styles.react_image} src={reactImage} alt="React图片" />
      </div>
      <input
        value={value}
        className={styles.input}
        type="text"
        placeholder="Input email"
        onChange={({ target }) => setValue(target.value)}
        onKeyDown={(e) => {
          status && e.keyCode === 13 && history.push(url);
        }}
      />
      {status && (
        <div className={styles.footer}>
          <Link to={url}>
            <Button type="primary">Login</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
