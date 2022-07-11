import styles from './Input.module.css';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
}

export default function TextArea({ title, ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col justify-center h-full">
      {title ? <label className={`${styles.inputTitle} mb-3`}>{title}:</label> : null}
      <textarea className={styles.textArea} {...props} />
    </div>
  );
}
