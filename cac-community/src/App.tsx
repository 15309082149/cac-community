
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import router from './route/index'
import './index.css'
function App() {
  const ReactElement = (route: IRouteType.IRouter): React.ReactNode => {
    if(!route.element) {
      return null;
    }
    return (
      <Suspense fallback={<div>Loading......</div>}>
        <route.element></route.element>
      </Suspense>
    )
  }
  const RouteItem = (route: IRouteType.IRouter) => {
    return (
      <Route key={route.name} element={ReactElement(route)} path={route.path}>
        {RouteList(route.children ?? [])}
      </Route>
    )
  }
  const RouteList = (list: IRouteType.IRouter[]) => {
    return list.map((item) => RouteItem(item))
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {RouteList(router)}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
