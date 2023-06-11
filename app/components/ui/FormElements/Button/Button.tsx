import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
	return (
		<button className={classNames(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}
