interface IHeader {
	title: string
	classes?: string
}

export const Header = ({ title, classes }: IHeader) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${
				classes?.includes('xl') ? '' : 'text-3xl'
			} ${classes}`}
		>
			{title}
		</h1>
	)
}
