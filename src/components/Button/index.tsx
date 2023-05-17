import styles from './styles.module.scss'

export interface StyledButtonProps {
  color: 'primary' | 'secondary' | 'highligh';
  size: 'small' | 'medium';
  width?: number;
  children?: React.ReactNode;
}

function Button ({ color, width, size, children }: StyledButtonProps) {
  return (
    <button 
      className={`${styles.default} ${styles[size]} ${styles[color]}`}
      style={{width: width ? `${width}px` : 'initial'}}
    >
      {children}
    </button>
  );
}

export default Button;
