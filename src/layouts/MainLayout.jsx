import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const MainLayout = () => {
    return (
        <div className='w-full h-screen'>
        <Header/>
        <div className='pt-10 px-[30px]'>

        <Outlet/>
        </div>
        </div>
    )
}

export default MainLayout