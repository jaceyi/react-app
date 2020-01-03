import * as React from 'react';

export interface IState {
  userInfo?: {
    name?: string;
    email?: string;
  };
}

export interface ISetState {
  (state: IState): void;
}

export default React.createContext<[IState?, ISetState?]>([]);
