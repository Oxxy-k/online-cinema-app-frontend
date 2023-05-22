import { Header } from '@/components/ui/Header'

import { Meta } from '@/utils/meta/Meta'

import * as M from '@/constants/messages'

export const Home = () => {
	return (
		<Meta title={M.META_HOME_DESCRIPTION} description={M.META_HOME_DESCRIPTION}>
			<Header
				title={M.META_HOME_TITLE}
				classes={'text-gray-300 mb-8 text-xl'}
			/>
		</Meta>
	)
}
