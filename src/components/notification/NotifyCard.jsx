import React, { useState } from 'react';

const NotifyCard = ({ item }) => {

    return (
        <div className='relative w-full min-h-[70px] p-2 rounded-lg shadow cursor-pointer 
        flex justify-between items-center'>
            <div className=''>
                <span className='text-primary_colors'>{item?.title}</span>
                <p className='text-sm'>{item?.body}</p>

            </div>

        </div>
    )
}

export default NotifyCard