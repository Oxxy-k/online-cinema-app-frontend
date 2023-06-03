import Link from 'next/link'

import { MovieItem } from './MovieItem'
import styles from './MovieList.module.scss'
import { SEE_MORE } from '@/constants/messages'
import { IMovie } from '@/types/movie.types'

interface IMovieListProps {
	movies: IMovie[]
	link: string
	title: string
}

export const MovieList = ({ movies, link, title }: IMovieListProps) => {
	return (
		<div className={styles.list}>
			<div className={styles.title}>{title}</div>
			{movies.map((movie) => (
				<MovieItem movie={movie} key={movie._id} />
			))}
			<Link legacyBehavior href={link}>
				<a className={styles.seeMoreBtn}>{SEE_MORE}</a>
			</Link>
		</div>
	)
}
