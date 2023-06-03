import * as R from '@/constants/routes';

export const getMovieUrl = (slug: string) => `${R.MOVIE_ROUTE}/${slug}`
export const getActorUrl = (slug: string) => `${R.ACTOR_ROUTE}/${slug}`
export const getGenreUrl = (slug: string) => `${R.GENRE_ROUTE}/${slug}`

export const getAdminUrl = (url: string) => `${R.ADMIN_ROUTE}/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)

