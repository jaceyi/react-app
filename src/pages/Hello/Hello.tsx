import './Hello.scss';
import * as React from 'react';
import Button from '@/components/Button/Button';
import store from '@/store';
import { History } from 'history';

const { useContext } = React;

interface HomeProps {
  history: History;
}

function Hello({ history }: HomeProps) {
  const [state] = useContext(store);

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
