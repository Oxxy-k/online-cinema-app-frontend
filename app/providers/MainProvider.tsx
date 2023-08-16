import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { Layout } from '@/components/layout'

import { store } from '@/store/store'

import { AuthProvider } from './AuthProvider'
import { HeadProvider } from './HeadProvider'
import { ReduxToast } from './ReduxToast'
import { TypeComponentAuthFields } from '@/types/auth.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export const MainProvider = ({
	children,
	Component,
}: TypeComponentAuthFields) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}
