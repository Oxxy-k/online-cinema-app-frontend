import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MaterialIcon } from '@/components/ui'

import { IMenuItem } from './menuItem.interface'
import styles from './menuItem.module.scss'

export const MenuItem = ({ icon, title, link }: IMenuItem) => {
	const { asPath } = useRouter()

	return (
		<Link
			href={link}
			className={classNames(styles.item, {
				[styles.active]: asPath === link,
			})}
		>
			<MaterialIcon name={icon} />
			<p> {title} </p>
		</Link>
	)
}
