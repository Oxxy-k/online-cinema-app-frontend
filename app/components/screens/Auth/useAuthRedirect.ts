import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { query, push } = useRouter()

	const redirectPath = query.redirect ? String(query.redirect) : '/'

	useEffect(() => {
		if (user) push(redirectPath)
	}, [push, redirectPath, user])
}
