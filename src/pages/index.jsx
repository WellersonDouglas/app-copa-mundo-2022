import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Cadastro } from './Cadastro'
import { Home } from './Home'
import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { Perfil } from './Perfil'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/perfil',
    element: <Perfil />,
  },
])

export const Router = () => <RouterProvider router={router} />
