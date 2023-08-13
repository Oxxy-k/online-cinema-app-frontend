import { IMenu } from './components/Menu/menu.interface'
import {
    MENU_TITLE_DISCOVERY,
    MENU_TITLE_FRESH_MOVIES,
    MENU_TITLE_GENERAL,
    MENU_TITLE_HOME,
    MENU_TITLE_TRENDING_NOW,
} from '@/constants/messages'

export const mainMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			title: MENU_TITLE_HOME,
			link: '/',
		},
		{
			icon: 'MdExplore',
			title: MENU_TITLE_DISCOVERY,
			link: '/genres',
		},
		{
			icon: 'MdRefresh',
			title: MENU_TITLE_FRESH_MOVIES,
			link: '/fresh',
		},
		{
			icon: 'MdLocalFireDepartment',
			title: MENU_TITLE_TRENDING_NOW,
			link: '/trending',
		},
	],
}

export const userMenu: IMenu = {
	title: MENU_TITLE_GENERAL,
	items: [],
}
