import { useQuery } from 'react-query'

import { genreService } from '@/services/genre.service'

import { convertGenreToMenuItem } from '@/utils/convertGenreToMenuItem';

export const usePopularGenres = () => {
    const queryData = useQuery(
        'popular genre menu',
        () => genreService.getAllGenres(),
        {
            onError: err => console.log(err)
        }
    )

    return {
        isLoading: queryData.isLoading,
        data: queryData.data?.data && convertGenreToMenuItem(queryData.data.data).splice(0, 4)
    }
}
