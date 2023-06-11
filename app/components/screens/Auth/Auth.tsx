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

export const Auth = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [formType, setFormType] = useState<'login' | 'registration'>('login')

	const { register, handleSubmit, formState, reset } = useForm<IAuthForm>({
		mode: 'onBlur',
	})

	const userLogin = (data: IAuthForm) => null

	const userRegister = (data: IAuthForm) => null

	const onSubmit: SubmitHandler<IAuthForm> = (data) => {
		formType === 'login' ? userLogin(data) : userRegister(data)
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
						register={register}
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
