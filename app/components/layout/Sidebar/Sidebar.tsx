import { Search } from '@/components/layout/Sidebar/Search'
import { MoviesContainer } from '@/components/layout/Sidebar/MoviesContainer';

import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}
