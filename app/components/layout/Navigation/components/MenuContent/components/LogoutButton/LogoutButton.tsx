import { MouseEvent } from 'react'

import { MaterialIcon } from '@/components/ui'

import { useActions } from '@/hooks/useActions'

import styles from '../MenuItem/menuItem.module.scss'

import { LOGOUT_BUTTON } from '@/constants/messages'

export const LogoutButton = () => {
	const { logout } = useActions()

	const handleLogout = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		logout()
	}

	return (
		<a
			className={styles.item}
			onClick={handleLogout}
		>
			<MaterialIcon name={'MdLogout'} />
			<p>{LOGOUT_BUTTON}</p>
		</a>
	)
}
