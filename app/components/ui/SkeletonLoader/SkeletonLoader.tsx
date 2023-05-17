import classNames from 'classnames'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { COLORS } from '../../../constants/styles'

export const SkeletonLoader = ({ className, ...rest }: SkeletonProps) => {
	return (
		<Skeleton
			{...rest}
			highlightColor={COLORS.LIGHT_BLACK}
			baseColor={COLORS.BLACK}
			className={classNames('rounded-lg', className)}
		/>
	)
}
