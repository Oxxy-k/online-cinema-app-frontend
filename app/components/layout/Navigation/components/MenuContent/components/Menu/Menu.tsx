import { FC } from 'react'

import {
	DynamicAuthItems,
	MenuItem,
} from '@/components/layout/Navigation/components/MenuContent/components'

import { IMenu } from './menu.interface'
import styles from './menu.module.scss'
import { MENU_TITLE_GENERAL } from '@/constants/messages'

export const Menu: FC<{ menuItem: IMenu }> = ({ menuItem }) => {
	return (
		<div>
			<p className={styles.header}> {menuItem.title} </p>
			{menuItem.title === MENU_TITLE_GENERAL ? (
				<DynamicAuthItems />
			) : (
				menuItem.items.map(({ title, link, icon }) => (
					<MenuItem key={title} title={title} icon={icon} link={link} />
				))
			)}
		</div>
	)
}
