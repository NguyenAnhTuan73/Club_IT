import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const MainLayout = () => {
    return (
        <div className='w-full h-full relative'>
            <div className='fixed top-0 left-0 right-0'>
                <Header />

            </div>
            <div className='pt-10 px-[30px] mt-[80px]'>

                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout