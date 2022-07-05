import styles from './Input.module.css';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
}

export default function TextArea({ title, ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col justify-center">
      <label className={styles.inputTitle}>{title}:</label>
      <textarea className={styles.textArea} {...props} />
    </div>
  );
}
