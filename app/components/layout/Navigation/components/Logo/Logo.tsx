import Link from 'next/link';
import Image from 'next/image';

import logoImage from '@/assets/images/logo.svg'

import styles from './Logo.module.scss'

export const Logo = () => {
    return (
        <Link href={'/'} className={styles.wrapper}>
            <Image
                src={logoImage}
                alt={'logo'}
                width={50}
                draggable={false}
            />
            <p className={'text-xl font-bold text-white'}>{'ONLINE CINEMA'}</p>
        </Link>
    )
}
