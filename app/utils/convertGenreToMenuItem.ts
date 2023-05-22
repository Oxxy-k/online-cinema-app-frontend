import { IMenuItem } from '@/components/layout/Navigation/components/MenuContent/components/MenuItem/menuItem.interface'

import { IGenre } from '@/types/movie.types'

import { getGenreUrl } from '@/config/navigation.config'

export const convertGenreToMenuItem = (genres: IGenre[]): IMenuItem[] => {
	return genres.map(({ slug, icon, name }) => ({
		icon,
		title: name,
		link: getGenreUrl(slug),
	}))
}
