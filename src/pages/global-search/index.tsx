import * as React from 'react';
import { useHistory } from 'react-router';
import Button from '@/components/Button';
import * as styles from './GlobalSearch.scss';

const Hello = () => {
  const history = useHistory();

  const query = new URLSearchParams(history.location.search);

  function handleClickBack() {
    history.goBack();
  }

  return (
    <div className={styles.hello_react}>
      <h1 className={styles.title}>email: {query.get('email')}</h1>
      <div className={styles.footer}>
        <Button onClick={handleClickBack}>Go back</Button>
      </div>
    </div>
  );
};

export default Hello;
