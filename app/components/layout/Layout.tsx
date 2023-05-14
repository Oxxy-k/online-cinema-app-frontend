import { Navigation } from '@/components/layout/Navigation';
import { Sidebar } from '@/components/layout/Sidebar';

import styles from './Layout.module.scss'

export const Layout = ({ children }) => {
    return <div className={styles.layout}>
        <Navigation/>
        <div className={styles.content}>
            {children}
        </div>
        <Sidebar/>
    </div>
}
