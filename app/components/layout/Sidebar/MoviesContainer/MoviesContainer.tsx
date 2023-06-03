import { FavoritesMovies } from './FavoritesMovies'
import { PopularMovies } from './PopularMovies'

export const MoviesContainer = () => {
	return (
		<div>
			<PopularMovies />
			<FavoritesMovies />
		</div>
	)
}
