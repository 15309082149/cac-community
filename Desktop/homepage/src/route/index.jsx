import Index from '../pages/index/index'
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {path: '/', element: <Index />},
    {path: '/index', element: <Index />},
])

export default router