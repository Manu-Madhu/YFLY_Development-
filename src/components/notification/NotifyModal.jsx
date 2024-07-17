import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import NotifyCard from './NotifyCard';

const NotifyModal = ({ setModal , data}) => {

    return (
        <div className='w-full sm:w-[400px] h-screen sm:h-[400px] absolute top-[10] right-0 
        bg-white rounded-lg shadow-lg border border-primary_colors'>
            <div className='flex flex-col p-2 gap-4'>
                <div className='flex justify-between pt-3'>
                    <h1 className='text-xl'>Notifications</h1>
                    <IoClose size={30} onClick={() => setModal(false)} />
                </div>

                <div className='w-full h-[500px] sm:h-[300px] flex flex-col gap-4 overflow-y-scroll
                rounded-lg border border-gray-500 '>
                    {
                        data?.reverse().map((item,i)=>(
                            <NotifyCard key={i} item={item}/>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default NotifyModal