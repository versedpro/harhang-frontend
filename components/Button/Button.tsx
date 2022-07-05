import React, { useState } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {title}
    </button>
  );
}
