import { api } from 'api/api'
import { AxiosResponse } from 'axios'

import { getMoviesUrl } from '@/config/api.config'

import { IMovie } from '@/types/movie.types'

export const movieService = {
	async getMoviesBySearch(searchTerms?: string): AxiosResponse<IMovie[]> {
		return api.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerms
				? { searchTerms }
				: {}
		})
	},
}
