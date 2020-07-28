import * as React from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import Button from '@/components/Button';
import * as styles from './style.scss';

const User = () => {
  const history = useHistory();

  const query = new URLSearchParams(history.location.search);

  const handleClickBack = useCallback(() => {
    history.goBack();
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
