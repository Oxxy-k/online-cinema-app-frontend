import { AxiosResponse } from 'axios'
import { api } from 'api/api'
import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

export const genreService = {
    async getAllGenres(searchParams?: string): AxiosResponse<IGenre[]> {
        return api.get<IGenre[]>(getGenresUrl(''), {
            params: searchParams
                ? { searchParams }
                : {}
        })
    },
}
