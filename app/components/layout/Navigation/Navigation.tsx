import styles from './Navigator.module.scss'
import { Logo, MenuContent } from '@/components/layout/Navigation/components';

export const Navigation = () => {
    return (
        <div className={styles.wrapper}>
            <Logo/>
            <MenuContent/>
        </div>
    )
}
