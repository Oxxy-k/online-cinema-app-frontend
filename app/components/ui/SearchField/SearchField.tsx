import { ChangeEvent } from 'react'

import { MaterialIcon } from '@/components/ui'

import styles from './SearchField.module.scss'
import { PLACEHOLDER_SEARCH } from '@/constants/messages'

interface ISearchField {
	searchValue: string
	onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField = ({ searchValue, onSearchChange }: ISearchField) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name={'MdSearch'} />
			<input
				placeholder={PLACEHOLDER_SEARCH}
				onChange={onSearchChange}
				value={searchValue}
			/>
		</div>
	)
}
