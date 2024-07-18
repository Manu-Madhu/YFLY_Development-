import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import NotifyCard from './NotifyCard';
import { PiDotsThreeFill } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import AllTab from './AllTab';
import UnreadTab from './UnreadTab';

const NotifyModal = ({ setModal, data }) => {
    const [tab, setTab] = useState('all')

    return (
        <div className='w-full sm:w-[400px] h-screen sm:h-[420px] absolute top-[10] right-0 
        bg-white rounded-lg shadow-lg border border-primary_colors'>
            <div className='flex flex-col p-2 gap-4'>
                <div className='flex justify-between items-center pt-3'>
                    <span className='text-xl'>Notifications</span>
                    <div className=''>
                        <button
                            onClick={() => setTab('all')}
                            className={`px-4 py-1 rounded-l-lg text-sm border border-primary_colors
                        ${tab === 'all' ? 'bg-primary_colors text-white ' : 'bg-white text-black '}`}>
                            All
                        </button>

                        <button
                            onClick={() => setTab('unread')}
                            className={`px-4 py-1 rounded-r-lg text-sm border border-primary_colors
                        ${tab === 'unread' ? 'bg-primary_colors text-white' : 'bg-white text-black'}`}>
                            Unread
                        </button>
                    </div>

                    <IoClose size={30} onClick={() => setModal(false)} />
                </div>

                {
                    tab === 'all'
                    ?
                    <AllTab data={data}  />
                    :
                    <UnreadTab data={data?.filter(item => item?.isRead === false)}/>
                }


            </div>
        </div>
    )
}

export default NotifyModal