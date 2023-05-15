import {
    usePopularGenres
} from '@/components/layout/Navigation/components/MenuContent/components/utils/usePopularGenres';
import { Menu } from '@/components/layout/Navigation/components/MenuContent/components';

export const GenresMenu = () => {
    const { isLoading, data } = usePopularGenres()

    const menuData = { title: 'Popular genres', items: data || [] }

    if (isLoading) return <div className={'mx-11 mb-6'}>Loading...</div>

    return <Menu menuItem={menuData}/>
}
