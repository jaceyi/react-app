import * as React from 'react';
import * as styles from './Button.scss';

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'default' | 'primary';
  onClick?: React.EventHandler<any>;
}

const Button: React.FC<Props> = (props: Props) => {
  const { children, disabled, style, className, type, onClick } = props;

  return (
    <button
      className={`${styles.rc_button} rc-button-${type || 'default'} ${className || ''}`}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
