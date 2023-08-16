import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

export const AuthProvider = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}: TypeComponentAuthFields) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActions()

	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname])

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser, isOnlyAdmin }}>
			{children}
		</DynamicCheckRole>
	)
}
