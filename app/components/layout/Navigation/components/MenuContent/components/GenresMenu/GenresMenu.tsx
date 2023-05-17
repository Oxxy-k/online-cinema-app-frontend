import { Menu } from '@/components/layout/Navigation/components/MenuContent/components'
import { usePopularGenres } from '@/components/layout/Navigation/components/MenuContent/components/utils/usePopularGenres'
import { SkeletonLoader } from '@/components/ui/SkeletonLoader'

export const GenresMenu = () => {
	const { isLoading, data } = usePopularGenres()

	const menuData = { title: 'Popular genres', items: data || [] }

	if (isLoading)
		return (
			<div className={'mx-11 mb-6'}>
				<SkeletonLoader className={'h-7 mt-6'} count={5} />
			</div>
		)

	return <Menu menuItem={menuData} />
}
