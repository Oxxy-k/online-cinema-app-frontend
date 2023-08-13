import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AuthForm } from '@/components/screens/Auth/AuthForm'
import { useAuthRedirect } from '@/components/screens/Auth/useAuthRedirect'
import { Button } from '@/components/ui/FormElements'
import { Header } from '@/components/ui/Header'

import { useAuth } from '@/hooks/useAuth'

import { Meta } from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import * as M from '@/constants/messages'
import { IAuthForm } from '@/types/auth.types'
import { useActions } from '@/hooks/useActions';

export const Auth = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [formType, setFormType] = useState<'login' | 'registration'>('login')

	const { register: registerInput, handleSubmit, formState, reset } = useForm<IAuthForm>({
		mode: 'onBlur',
	})

	const { register, login } = useActions()

	const onSubmit: SubmitHandler<IAuthForm> = (data) => {
		formType === 'login' ? login(data) : register(data)
		reset()
	}

	const setType = (type: 'login' | 'registration') => () => setFormType(type)

	return (
		<Meta title={M.META_AUTH_TITLE}>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Header className={'mb-6'} title={M.AUTH_PAGE_TITLE} />
					<AuthForm
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<Button
							type={'submit'}
							onClick={setType('login')}
							disabled={isLoading}
						>
							{M.LOGIN_BUTTON}
						</Button>
						<Button
							type={'submit'}
							onClick={setType('registration')}
							disabled={isLoading}
						>
							{M.REGISTER_BUTTON}
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}
