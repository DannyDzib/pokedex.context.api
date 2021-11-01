import IRoute from '@interfaces/route'
import { HomePage } from '@screens/index';
import CharacterAddEdit from '@screens/Home/CharacterAddEdit';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/character',
        name: 'Add edit page',
        component: CharacterAddEdit,
        exact: true
    },
    {
        path: '/character/:id(\\d+)',
        name: 'About Page',
        component: CharacterAddEdit,
        exact: true
    }
]

export default routes