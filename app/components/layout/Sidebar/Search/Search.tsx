import { SearchList } from '@/components/layout/Sidebar/Search/SearchList'
import { SearchField } from '@/components/ui/SearchField'

import styles from './Search.module.scss'
import { useSearch } from './useSearch'

export const Search = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchField onSearchChange={handleSearch} searchValue={searchTerm} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}
