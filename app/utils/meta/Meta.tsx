import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

import { siteName, titleMerge } from '@/config/seo.config'

import { IMeta } from '@/utils/meta/meta.interface'
import { getText } from '@/utils/string/getText'

export const Meta: FC<IMeta> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()
	const currentPath = `${process.env.REACT_APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp={'headline'}>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp={'description'}
							name={'description'}
							content={getText(description, 152)}
						/>
						<link rel={'canonical'} href={currentPath} />
						<meta property={'og:locale'} content={'en'} />
						<meta property={'og:title'} content={titleMerge(title)} />
						<meta property={'og:url'} content={currentPath} />
						<meta property={'og:image'} content={image || logoImage} />
						<meta property={'og:site_name'} content={siteName} />
						<meta
							property={'og:description'}
							content={getText(description, 197)}
						/>
					</>
				) : (
					<meta name={'robots'} content={'noindex, nofollow'} />
				)}
			</Head>
			{children}
		</>
	)
}
