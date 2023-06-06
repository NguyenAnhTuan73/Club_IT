import React from 'react'
import down from '../accset/icon/Play arrow.png'
import group from '../accset/icon/Group.png';
import union from '../accset/icon/Union.png';
import frame from '../accset/icon/Frame.png';
import user from '../accset/icon/Frame 69.png'
import circle from '../accset/cirle.png';
import { dataSupportTable } from '../accset/data/dataSupport';
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
                <div
                    className='flex items-center border-2 border-grayBlur w-[8rem] p-2 bg-white rounded-md mb-10'>
                    <span>May, 2023</span>
                    <img className='ml-4' src={down} alt="" />
                </div>
                <div className='flex items-center justify-between mb-[50px]'>
                    {dataSupport.map((item, index) => (
                        <div key={index}>
                            <div className='border border-blueMain flex items-center rounded-lg h-[110px] w-[360px] 2xl:w-[290px] p-5'>
                                <div className='w-[70px] h-[70px] bg-bgIcon rounded-md flex items-center justify-center'>
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className='ml-2.5'>
                                    <h1 className='text-4xl text-blueMain font-semibold'>{item.name}</h1>
                                    <span className='text-sm text-grayMain font-medium font-slab'>{item.des}</span>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex items-top'>
                    <div className='mr-[15px] w-1/2 pb-[114px]'>
                        <div className='rounded-lg border border-grayBlur mb-[30px] shadow-xl h-[291px] '>1</div>
                        <div className='rounded-lg border border-grayBlur shadow-xl h-[272px] p-5'>
                            {dataSupportTable.map((item, index) => {
                                return (
                                    <div key={index} className='flex items-center justify-between 
                                    px-5 rounded-md bg-grayBlur mb-5 h-[100px] text-lg font-medium'>
                                        <span>{item.name}</span>
                                        <span className='text-6xl text-greenMain font-condensed font-bold'>{item.number}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='ml-[15px] w-1/2 border rounded-lg border-grayBlur shadow-xl h-[493px] p-5'>
                        <div className='flex items-center justify-between bg-grayBlur px-5 h-[100px] mb-5 rounded-md'>
                            <span className='text-lg font-medium'>Number of Devices up to date with OS patches</span>
                            <span className='text-6xl font-condensed font-bold text-greenMain'>50</span>
                        </div>
                        <div className='flex items-center justify-between bg-grayBlur p-5  mb-5 rounded-md'>
                            <span className='text-lg font-medium'>Patch complianxe status for devices</span>
                            <div className="relative">
                                <img className='' src={circle} alt="" />
                                <div className='flex flex-col items-center absolute top-1/4 right-1/4'>
                                    <div className="text-white">
                                        <span className='text-[50px]  font-condensed font-bold'>90</span>
                                        <span className="text-2xl font-condensed font-medium">%</span>

                                    </div>
                                    <span className="text-white">in compliance</span>
                                </div>

                            </div>

                        </div>
                        <div className='flex items-center justify-between bg-grayBlur p-5 h-[62px] rounded-md'>
                            <span className='text-lg font-medium'>Summary</span>
                            <span className='text-lg font-condensed font-bold text-greenMain'>Up to date</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NevoSupport