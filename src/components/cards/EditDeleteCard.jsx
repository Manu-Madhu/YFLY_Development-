import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { adminDataRoute, dataRoute } from '../../utils/Endpoint';
import { toast } from 'react-toastify';
import { FaRegEdit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { setAdminDefinedData } from '../../redux/slices/CommonDataReducer';

const EditDeleteCard = ({ item, data, setData , resourceName}) => {
    const [editMode, setEditMode] = useState(false);
    const [label, setLabel] = useState(item?.label);
    const dispatch = useDispatch()
    const adminDefinedData = useSelector(state => state?.data?.adminDefinedData);


    const axiosInstance = useAxiosPrivate();

    const cancelEdit = () => {
        setEditMode(false)
        setLabel(item?.label)
    }

    const handleEdit = async () => {
        try {
            if (!label?.trim()) return;

            if (label === item?.label) return;

            const res = await axiosInstance.put(adminDataRoute,
                {name: resourceName, list_id: item?._id, label: label }
            )

            if (res.status === 200) {
                toast.success('data Updated')
                const updatedResource = res?.data?.data;
                const updatedResourceList = updatedResource?.list;
                console.log({updatedResourceList})

                setData([...updatedResourceList])

                const newADD = adminDefinedData?.map((item) => {
                    if (item?.name === resourceName) {
                      return updatedResource
                    }
          
                    return item
                  }) || []
          
                  dispatch(setAdminDefinedData([...newADD]))

                setEditMode(false)
            }

        } catch (error) {
            console.error(error)
            toast.error('Failed to Update')
        }
    }

    return (
        <div className='w-full h-[50px] flex justify-around items-center gap-2 rounded-md border border-primary_colors'>

            <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                disabled={!editMode}
                className='w-1/2 px-2 flex items-center rounded outline-none border border-dotted border-primary_colors'
            />

            {
                editMode
                    ?
                    <div className='flex items-center gap-2'>
                        <span onClick={cancelEdit}
                            className='cursor-pointer'><IoClose size={22} /></span>
                        <span onClick={handleEdit}
                            className='cursor-pointer '><TiTick size={22} /></span>
                    </div>
                    :
                    <div className='flex items-center gap-4'>

                        <span onClick={() => setEditMode(true)}
                            className='cursor-pointer text-blue-500'><FaRegEdit /></span>

                    </div>

            }

        </div>
    )
}

export default EditDeleteCard