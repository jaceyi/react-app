import * as React from 'react';
import { useCallback } from 'react';
import Button from '@/components/Button';
import * as styles from './style.module.scss';
import { useLocation, useNavigate } from 'react-router';

const User = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const navigate = useNavigate();
  const handleClickBack = useCallback(() => {
    navigate(-1);
  }, [history]);

  return (
    <div>
      <h1 className={styles.title}>email: {query.get('email')}</h1>
      <Button className={styles.button} onClick={handleClickBack}>
        Go back
      </Button>
    </div>
  );
};

export default User;
