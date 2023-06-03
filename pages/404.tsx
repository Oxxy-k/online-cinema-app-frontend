import { Header } from '@/components/ui/Header'

import { Meta } from '@/utils/meta/Meta'

import { ERROR_PAGE_404_META, ERROR_PAGE_404_TITLE } from '@/constants/messages'

const Error404 = () => {
	return (
		<Meta title={ERROR_PAGE_404_META}>
			<Header title={ERROR_PAGE_404_TITLE} />
		</Meta>
	)
}

export default Error404
