import {
	GenresMenu,
	Menu,
} from '@/components/layout/Navigation/components/MenuContent/components'
import {
	mainMenu,
	userMenu,
} from '@/components/layout/Navigation/components/MenuContent/menu.data'

import styles from './MenuContent.module.scss'

export const MenuContent = () => {
	return (
		<div className={styles.container}>
			<Menu menuItem={mainMenu} />
			<GenresMenu />
			<Menu menuItem={userMenu} />
		</div>
	)
}
