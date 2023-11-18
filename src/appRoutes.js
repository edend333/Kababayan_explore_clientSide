import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/general/header'
import Home from './components/home'
import Page404 from './components/page404'
import UserCom from './components/users/UserCom'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserCom />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}
