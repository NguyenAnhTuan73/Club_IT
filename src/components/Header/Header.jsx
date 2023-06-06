import React from 'react'
import { NavLink,useLocation  } from 'react-router-dom';
import down from '../../accset/icon/Play arrow.png'
import logo from '../../accset/logo.png';
import exportFile from '../../accset/icon/export-file 1.png';
import avatar from '../../accset/avatar.png';
import { dataButton } from './dataHeader';
const Header = () => {
    const {pathname} = useLocation()

    return (
        <div style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' }}
            className='h-[80px] w-full py-5 px-[30px] bg-white  shadow-xl '>
            <div className='flex h-10 items-center w-full'>
                <div className='w-1/2 flex items-center justify-between'>
                    <div className='min-w-[137px] h-10'>
                        <img className='' src={logo} alt="logo" />
                    </div>
                    <div style={{borderRadius:'8px'}} className='flex border-2 border-grayBlur'>
                        {dataButton.map((item, index) => {
                            return (
                                <div key={index}>
                                    <NavLink to={item.path}>
                                        <div style={{borderRadius:'8px'}}
                                        className={`${pathname === item.path ? 'bg-purpleMain ': 'bg-white' } flex items-center w-[170px] py-[10px] px-[20px] ${pathname === item.path ? 'text-white ': 'text-grayMain' }  rounded-md duration-300 `}
                                        >
                                            <img src={pathname === item.path ? item.iconActive : item.iconInActive} className='text-black' alt="" />
                                            <span className='font-semibold ml-1'>{item.name}</span>
                                        </div>
                                    </NavLink>
                                </div>

                            )
                        })}                       
                    </div>

                </div>
                <div className='flex items-center w-1/2 justify-end'>
                    <div className='bg-blueMain flex items-center text-white p-2.5 h-10'>
                        <img src={exportFile} alt="" />
                        <span className='ml-1'>Executive Report</span>
                    </div>
                    <div className='flex items-center ml-[50px]'>
                        <span className='mr-2.5 font-medium'>Martin Botosh</span>
                        <img src={avatar} alt="" />
                        <img className='ml-2.5' src={down} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
