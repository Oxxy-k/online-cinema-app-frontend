import {
	LogoutButton,
	MenuItem,
} from '@/components/layout/Navigation/components/MenuContent/components'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/navigation.config'

import { LOGIN_BUTTON } from '@/constants/messages'

const AuthItems = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem icon={'MdSettings'} title={'Profile'} link={'/profile'} />
					<LogoutButton />
				</>
			) : (
				<MenuItem icon={'MdLogin'} title={LOGIN_BUTTON} link={'/auth'} />
			)}
			{user?.isAdmin && (
				<MenuItem
					icon={'MdOutlineLock'}
					title={'Admin panel'}
					link={getAdminHomeUrl()}
				/>
			)}
		</>
	)
}

export default AuthItems;
