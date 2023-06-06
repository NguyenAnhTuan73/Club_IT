import React from 'react'
import down from '../accset/icon/Play arrow.png'
import group from '../accset/icon/Group.png';
import union from '../accset/icon/Union.png';
import frame from '../accset/icon/Frame.png';
import user from '../accset/icon/Frame 69.png'
const NevoSupport = () => {
    const dataSupport = [
        {
            icon: group,
            name: '300',
            des: 'Tickets served'
        },
        {
            icon: union,
            name: '78',
            des: 'Issues solved'
        },
        {
            icon: frame,
            name: '50',
            des: 'Preventative actions run'
        },
        {
            icon: user,
            name: 'Robin Park',
            des: 'Most active user'
        },
    ]
    return (
        <div>
            <div>
                <div style={{ borderRadius: '8px' }} className='flex items-center border-2 border-grayBlur w-[8rem] p-2 bg-white'>
                    <span>May, 2023</span>
                    <img className='ml-4' src={down} alt="" />
                </div>
                <div className='flex items-center justify-between'>
                    {dataSupport.map((item, index) => (
                        <div key={index}>
                            <div className='border border-blueMain flex items-center'>
                                <img src={item.icon} alt="" />
                                <div className='ml-2.5'>
                                    <h1 className='text-2xl text-blueMain font-semibold'>{item.name}</h1>
                                    <span>{item.des}</span>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default NevoSupport