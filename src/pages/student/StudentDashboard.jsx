import React from 'react'
import Carousel from '../../components/student/Carousel'

import {Banner} from "../../data/Banner"

const StudentDashboard = () => {
  return (
    <div className='px-5'>
      <Carousel banner ={Banner}/>
    </div>
  )
}

export default StudentDashboard