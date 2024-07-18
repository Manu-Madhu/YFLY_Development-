import React, { useState } from 'react';

const NotifyCard = ({ item, selected, setSelected, checkCard }) => {

    return (
        <div className='relative w-full min-h-[70px] p-2 rounded-lg shadow cursor-pointer 
        flex gap-4 items-center'>
            <input
                type='checkbox'
                checked={selected?.includes(item?._id)}
                onChange={()=> checkCard(item?._id)}
                className=''
            />

            <div className=''>
                <span className='text-primary_colors truncate'>{item?.title}</span>
                <p className='text-sm truncate'>{item?.body}</p>

            </div>

        </div>
    )
}

export default NotifyCard