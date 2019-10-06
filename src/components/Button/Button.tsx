import * as React from 'react';
import './Button.scss';

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'default' | 'primary'
}

const Button: React.FC<Props> = (props: Props) => {
  const { children, disabled, style, className, type } = props;

  return (
    <button
      className={`rc-button rc-button-${type || 'default'} ${className || ''}`}
      style={style}
      disabled={disabled}>{children}</button>
  );
};

export default Button;
