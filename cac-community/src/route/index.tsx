
import { lazy } from 'react'

const Index = lazy(() => import('../pages/index/index'))
const Router: IRouteType.IRouter[] = [
    {
        path: '/',
        element: Index,
        meta: {pageTitle: 'index'},
        name: 'index',
    }
]

export default Router