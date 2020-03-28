import * as React from 'react';
import { useHistory } from 'react-router';
import Button from '@/components/Button';
import * as styles from './styles/index.scss';

const Hello = () => {
  const history = useHistory();

  const query = new URLSearchParams(history.location.search);

  function handleClickBack() {
    history.goBack();
  }

  return (
    <div>
      <h1 className={styles.title}>email: {query.get('email')}</h1>
      <Button className={styles.button} onClick={handleClickBack}>
        Go back
      </Button>
    </div>
  );
};

export default Hello;
