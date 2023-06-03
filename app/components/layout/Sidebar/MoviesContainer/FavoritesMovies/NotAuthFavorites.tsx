import { AUTH_FOR_VIEWING_FAVORITES } from '@/constants/messages'

export const NotAuthFavorites = () => {
	return (
		<div
			className={
				'mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80'
			}
		>
			{AUTH_FOR_VIEWING_FAVORITES}
		</div>
	)
}
