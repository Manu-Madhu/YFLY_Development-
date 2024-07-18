import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import NotifyCard from './NotifyCard';
import { PiDotsThreeFill } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { notifyEmployeeRoute } from '../../utils/Endpoint';
import { setNotifications } from '../../redux/slices/NotifyReducer';

const NotifyTab = ({ data }) => {
    const [subBox, setSubBox] = useState(false)
    const [selected, setSelected] = useState([])
    const [selectAll, setSelectAll] = useState(false)
    const user = useSelector(state => state.auth.userInfo)
    const userId = user?._id
    const dispatch = useDispatch()

    const checkCard = (id) => {
        if (selected?.includes(id)) {
            const filtered = selected?.filter(item => item !== id)
            setSelected(filtered)
        }
        else {
            setSelected((prev) => ([...prev, id]))
        }
    }

    const toggleSelectAllFunc = () => {
        const allSelected = data?.map(el => el._id)?.every(item => selected?.includes(item))
        if (allSelected) {
            setSelectAll(false);
            setSelected([])
        }
        else {
            setSelectAll(true)
            setSelected(data?.map(el => el._id))
        }
    }

    const checkForAllSelection = () => {
        const allSelected = data?.length && data?.map(el => el._id)?.every(item => selected?.includes(item))
        if (allSelected) {
            setSelectAll(true)
        }
        else {
            setSelectAll(false)
        }
    }

    useEffect(() => {
        checkForAllSelection()
    }, [selected])

    const axiosPrivate = useAxiosPrivate()

    const changeReadStatus = async (status) => {
        try {
            const response = await axiosPrivate.put(`${notifyEmployeeRoute}/status`,
                { selected, status, userId }
            )

            if (response.status === 200) {
                if(Array.isArray(response?.data?.notification)){
                    dispatch(setNotifications(response?.data?.notification))
                    setSubBox(false)
                    setSelected([])
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col py-2 gap-2'>
            <div className='w-full flex items-center gap-4'>
                <div
                    className='flex items-center gap-2 cursor-pointer px-2'>
                    <input
                        type='checkbox'
                        checked={selectAll}
                        onChange={toggleSelectAllFunc}
                        className=''
                    />
                    <span className='text-sm'>
                        {
                            selected?.length > 0
                                ?
                                `${selected?.length} selected`
                                :
                                `Select all`
                        }
                    </span>

                </div>

                {
                    selected?.length > 0
                    &&
                    <div className='w-[30px] h-[20px] relative'>
                        <HiDotsHorizontal size={20}
                            onClick={() => setSubBox(!subBox)}
                            className='text-primary_colors cursor-pointer' />

                        {
                            subBox
                            &&
                            <div className='w-[160px] h-[80px] absolute top-8 left-0 flex flex-col
                                    border border-gray-500 bg-white rounded-lg z-50'>
                                <div 
                                onClick={()=> changeReadStatus('read')}
                                className="w-full h-[50%] text-sm flex items-center justify-center 
                                        hover:bg-primary_colors hover:text-white cursor-pointer">
                                    Mark as read
                                </div>

                                <div 
                                onClick={()=> changeReadStatus('unread')}
                                className="w-full h-[50%] text-sm flex items-center justify-center 
                                        hover:bg-primary_colors hover:text-white cursor-pointer">
                                    Mark as unread
                                </div>
                            </div>
                        }
                    </div>
                }

            </div>

            <div className='w-full h-[500px] sm:h-[300px] flex flex-col items-center gap-4 overflow-y-scroll
                    rounded-lg border border-gray-500 '>
                {
                    data?.length > 0
                        ?
                        data?.map((item, i) => (
                            <NotifyCard key={i} item={item} selected={selected} setSelected={setSelected}
                                checkCard={checkCard} />
                        ))
                        :
                        <p className='mt-10'>No notifications</p>
                }
            </div>

        </div>
    )
}

export default NotifyTab