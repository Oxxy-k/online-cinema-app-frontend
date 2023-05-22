import { SEARCH_MOVIE_NOT_FOUND } from 'CONSTANTS/messages'
import { IMovie } from 'TYPES/movie.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/config/navigation.config'

import styles from './SearchList.module.scss'

export const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)} legacyBehavior >
						<a>
							<Image
								src={movie.poster}
								alt={movie.title}
								width={50}
								height={50}
								objectFit={'cover'}
								objectPosition={'top'}
							/>
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className={'text-white text-center my-4'}>
					{SEARCH_MOVIE_NOT_FOUND}
				</div>
			)}
		</div>
	)
}
