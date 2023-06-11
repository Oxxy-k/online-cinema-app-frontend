import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './InputField.module.scss'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: FieldError | undefined
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	({ placeholder, error, type = 'text', className, ...rest }, ref) => {
		return (
			<div className={classNames(styles.container, className)}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

InputField.displayName = 'InputField'
