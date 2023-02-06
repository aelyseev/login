import { MouseEvent, ReactElement } from 'react';

import styles from './button.module.css';

type Props = {
  disabled?: boolean;
  children: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => unknown;
  type?: 'button' | 'submit';
};

export function Button({disabled = false, children, type = 'button', onClick}: Props): ReactElement {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
      type={type}
    >
      {children}
    </button>
  );
}
