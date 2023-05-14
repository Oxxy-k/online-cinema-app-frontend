import { mainMenu, userMenu } from '@/components/layout/Navigation/components/MenuContent/menu.data';
import { GenresMenu, Menu } from '@/components/layout/Navigation/components/MenuContent/components';

export const MenuContent = () => {
    return <div>
        <Menu menuItem={mainMenu}/>
        <GenresMenu/>
        <Menu menuItem={userMenu}/>
    </div>
}
