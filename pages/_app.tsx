import type { AppProps } from 'next/app'

import { MainProvider } from '../app/providers/MainProvider'
import '../app/styles/globals.scss'

import { TypeComponentAuthFields } from '@/types/auth.types'

type AppType = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: AppType) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
