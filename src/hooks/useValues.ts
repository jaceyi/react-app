import { useReducer, useCallback, useState } from 'react';

/**
 * @description useState 增强版，可以更新对象部分值
 * @param initialValue {object|function}
 */
const useValues = (initialValue: object | (() => object)) => {
  const [_initialValue] = useState(initialValue); // 初始值不变
  const [state, dispatch] = useReducer(
    (state: object, { type, payload }: { type: string; payload: any }) => {
      switch (type) {
        case 'update':
          return {
            ...state,
            ...payload
          };
        case 'force':
          return payload;
      }
    },
    _initialValue
  );

  const updateValues = useCallback(
    (_values = {}) => {
      if (typeof _values !== 'object') {
        return console.error('values required type is object!');
      }
      dispatch({
        type: 'update',
        payload: _values
      });
    },
    [dispatch]
  );

  const forceValues = useCallback(
    (_values: object) => {
      dispatch({
        type: 'force',
        payload: _values ?? _initialValue
      });
    },
    [dispatch]
  );

  return [state, updateValues, forceValues];
};

export default useValues;
