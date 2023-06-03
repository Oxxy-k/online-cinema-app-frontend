import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

import { MovieList } from '@/components/layout/Sidebar/MoviesContainer/MovieList'
import { SkeletonLoader } from '@/components/ui/SkeletonLoader'

import { movieService } from '@/services/movie.service'

import { POPULAR_MOVIES } from '@/constants/messages'
import { TRENDING_ROUTE } from '@/constants/routes'
import { IMovie } from '@/types/movie.types'

export const PopularMovies = () => {
	const { isLoading, data: popularMovies = [] } = useQuery<
		AxiosResponse<IMovie[]>,
		Error,
		IMovie[]
	>('Popular movies in sidebar', () => movieService.getPopularMovies())

	if (isLoading)
		return (
			<div className={'mt-11'}>
				<SkeletonLoader count={3} className={'h-28 mb-4'} />
			</div>
		)

	return (
		<div>
			<MovieList
				movies={popularMovies}
				title={POPULAR_MOVIES}
				link={TRENDING_ROUTE}
			/>
		</div>
	)
}
