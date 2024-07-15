import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import DataSetupModal from './DataSetupModal';

const Settings = () => {
    const [dataSetupModal , setDataSetupModal] = useState(false)

    const [dataName, setDataName] = useState('')

    return (
        <div className="container mx-auto w-full h-full  pt-10 pb-28">
            <div className="w-full flex justify-between items-center mb-4">
                <h1 className="text-primary_colors font-bold md:text-2xl mb-6 mt-3">
                    Settings
                </h1>
            </div>

            <div className=" flex w-full flex-wrap items-center gap-5">

                <div className="h-[100px] flex w-full md:w-[290px] justify-around items-center bg-white text-primary_colors p-5  py-7 rounded-lg shadow-xl">
                    <h1 onClick={()=> {setDataSetupModal(true); setDataName('stage')}}
                    className="font-bold flex items-center justify-center gap-2 cursor-pointer capitalize ">
                        Update Stages
                        <IoIosAddCircle />
                    </h1>
                </div>

                <div className="h-[100px] flex w-full md:w-[290px] justify-around items-center bg-white text-primary_colors p-5  py-7 rounded-lg shadow-xl">
                    <h1 onClick={()=> {setDataSetupModal(true); setDataName('followup method')}}
                    className="font-bold flex items-center justify-center gap-2 cursor-pointer capitalize ">
                        Update followup method
                        <IoIosAddCircle />
                    </h1>
                </div>


            </div>


            {
                dataSetupModal
                &&
                <DataSetupModal setModal={setDataSetupModal} name={dataName} />
            }

        </div>
    )
}

export default Settings