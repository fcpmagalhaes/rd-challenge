import styles from './styles.module.scss'
import { ButtonHTMLAttributes } from 'react'
export interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  color: 'primary' | 'secondary' | 'highligh';
  size: 'small' | 'medium';
  width?: number;
}

function Button({color, width, size, children, ...rest}: StyledButtonProps ) {
  return (
    <button 
      className={`${styles.default} ${styles[size]} ${styles[color]}`}
      style={{width: width ? `${width}px` : 'initial'}}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button;
