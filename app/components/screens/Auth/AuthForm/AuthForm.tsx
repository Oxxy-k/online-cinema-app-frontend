import { FormState, UseFormRegister } from 'react-hook-form'

import { InputField } from '@/components/ui/FormElements'

import { EMAIL, PASSWORD } from '@/constants/messages'
import { patterns } from '@/constants/patterns'
import { IAuthForm } from '@/types/auth.types'

interface AuthFormProps {
	register: UseFormRegister<any>
	formState: FormState<IAuthForm>
	isPasswordRequired?: boolean
}

export const AuthForm = ({
	register,
	formState,
	isPasswordRequired = false,
}: AuthFormProps) => {
	const { errors } = formState

	return (
		<>
			<InputField
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: patterns.email,
						message: 'Please, check your email address',
					},
				})}
				placeholder={EMAIL}
				error={errors.email}
			/>
			<InputField
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols',
								},
						  }
						: {}
				)}
				placeholder={PASSWORD}
				type={'password'}
				error={errors.password}
			/>
		</>
	)
}
