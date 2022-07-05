import React, { useState } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export default function TextInput({ title, ...props }: InputProps) {
  return (
    <div className="flex flex-row items-center">
      <label className={styles.inputTitle}>{title}:</label>
      <input type="text" className={styles.input} {...props} />
    </div>
  );
}
