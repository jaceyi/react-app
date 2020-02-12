import './Hello.scss';
import * as React from 'react';
import Button from '@/components/Button/Button';
import store from '@/store';
import { History } from 'history';

const { useContext, useEffect } = React;

interface HelloProps {
  history: History;
}

function Hello({ history }: HelloProps) {
  const [state] = useContext(store);

  useEffect(() => {
    if (!state.userInfo?.name) {
      history.replace('/');
    }
  }, []);

  function handleClickBack() {
    history.goBack();
  }

  return (
    <div className="hello-react">
      <h1 className="title">Hello {state.userInfo?.name}</h1>
      <div className="footer">
        <Button onClick={handleClickBack}>Go back</Button>
      </div>
    </div>
  );
}

export default Hello;
