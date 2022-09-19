import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './scss/style.scss'
import UIexample from './pages/UIexample'
import Calendar from './pages/reservation/index'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import User from './pages/user'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Login = React.lazy(() => import('./pages/login/Login'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/login" name="Login Page" element={<Login />} />
          <Route path="/user" name="User" element={<User />} />
          <Route path="/reservation" element={<Calendar />} />
          <Route path="/ui" element={<UIexample />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
