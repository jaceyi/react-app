import * as React from 'react';
import * as styles from './style.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'default' | 'primary';
}

const Button = ({ className, type = 'default', ...props }: Props) => {
  return (
    <button
      className={`${styles.button} rc-button-${type} ${className || ''}`}
      {...props}
    />
  );
};

export default Button;
