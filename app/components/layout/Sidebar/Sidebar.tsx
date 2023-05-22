import { Search } from '@/components/layout/Sidebar/Search'

import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
		</div>
	)
}
