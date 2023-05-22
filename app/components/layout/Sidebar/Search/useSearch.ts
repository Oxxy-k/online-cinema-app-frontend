import { AxiosResponse } from 'axios'
import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { movieService } from '@/services/movie.service'

import { IMovie } from '@/types/movie.types'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce(searchTerm)

	const { isSuccess, data } = useQuery<
		AxiosResponse<IMovie[]>,
		Error,
		IMovie[]
	>(
		['get movies by search', debouncedSearch],
		() => movieService.getMoviesBySearch(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	)

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(event.target.value)

	return { isSuccess, handleSearch, data, searchTerm }
}
