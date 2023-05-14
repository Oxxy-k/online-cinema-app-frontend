import { FC } from 'react'

import { MenuItem } from '@/components/layout/Navigation/components/MenuContent/components'

import { IMenu } from './menu.interface'
import styles from './menu.module.scss'

export const Menu: FC<{ menuItem: IMenu }> = ({ menuItem }) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.header}> {menuItem.title} </p>
            {
                menuItem.items.map(({ title, link, icon }) => (
                    <MenuItem key={title} title={title} icon={icon} link={link}/>
                ))
            }
        </div>
    )
}
