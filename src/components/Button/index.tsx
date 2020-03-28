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

const Button: React.FC<Props> = ({
  children,
  disabled,
  style,
  className,
  type = 'default',
  onClick
}: Props) => {
  return (
    <button
      className={`${styles.rc_button} rc-button-${type} ${className || ''}`}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
