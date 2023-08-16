import { useRouter } from 'next/router'

import { useAuth } from '@/hooks/useAuth'

import { AUTH_ROUTE } from '@/constants/routes'
import { TypeComponentAuthFields } from '@/types/auth.types'

const CheckRole = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}: TypeComponentAuthFields) => {
	const { user } = useAuth()

	const router = useRouter()

	if (user?.isAdmin) return children

	if (isOnlyAdmin && !user?.isAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}

	const isUser = user && !user.isAdmin

	if (isUser && isOnlyUser) return children

	router.pathname !== AUTH_ROUTE && router.replace(AUTH_ROUTE)
	return null
}

export default CheckRole
