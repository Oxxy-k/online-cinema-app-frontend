import { Header } from '@/components/ui/Header'

import { Meta } from '@/utils/meta/Meta'

import { ERROR_PAGE_500_META, ERROR_PAGE_500_TITLE } from '@/constants/messages'

const Error500 = () => {
	return (
		<Meta title={ERROR_PAGE_500_META}>
			<Header title={ERROR_PAGE_500_TITLE} />
		</Meta>
	)
}

export default Error500
