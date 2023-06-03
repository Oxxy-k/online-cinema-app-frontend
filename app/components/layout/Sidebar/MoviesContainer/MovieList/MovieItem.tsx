import Image from 'next/image'
import Link from 'next/link'

import { getGenreUrl, getMovieUrl } from '@/config/navigation.config'

import styles from './MovieList.module.scss'
import { IMovie } from '@/types/movie.types'
import { getMovieGenreItem } from '@/utils/movie/getMovieGenreItem';
import { MaterialIcon } from '@/components/ui';

interface IMovieItemProps {
	movie: IMovie
}

export const MovieItem = ({ movie }: IMovieItemProps) => {
	return (
		<div className={styles.movieItem}>
			<Link legacyBehavior href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						alt={movie.title}
						src={movie.poster}
						width={65}
						height={97}
						priority
					/>
				</a>
			</Link>
			<div className={styles.movieInfo}>
				<div className={styles.movieItemTitle}>{movie.title}</div>
				<div className={styles.movieItemGenres}>
					{movie.genres.map((genre, index) => (
						<Link legacyBehavior key={genre._id} href={getGenreUrl(genre.slug)}>
							<a>{getMovieGenreItem(genre.name, index, movie.genres.length)}</a>
						</Link>
					))}
				</div>
                <div className={styles.movieItemRating}>
					<MaterialIcon name={'MdStarRate'}/>
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}
