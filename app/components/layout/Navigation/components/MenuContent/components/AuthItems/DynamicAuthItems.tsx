import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('./AuthItems'), { ssr: false })

export const DynamicAuthItems = () => {
	return (
		<>
			<NoSSR />
		</>
	)
}
