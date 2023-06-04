import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { Layout } from '@/components/layout'

import { store } from '@/store/store'

import { HeadProvider } from './HeadProvider'
import { ReduxToast } from './ReduxToast'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export const MainProvider = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}
