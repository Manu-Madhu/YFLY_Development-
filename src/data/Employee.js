import councilors from "../assets/icon/employee/Counselers.png"
import operations from "../assets/icon/employee/operation.png"
import writers from "../assets/icon/employee/Writer.png"
import finances from "../assets/icon/employee/Finance.png"
import third from "../assets/icon/employee/therapy.png"
import interviewers from "../../src/assets/icon/employee/interview.png"
import rd from "../assets/icon/employee/R&E.png"
import technical from "../assets/icon/employee/tech.png"



export const EmployeeCards = [
    {
      id: 1,
      image:councilors,
      path:"counselling",
      name:"COUNSELLORS"
    },
    {
      id: 2,
      image:operations,
      path:"operations",
      name:"OPERATIONS SPECIALIST"
    },
    {
      id: 3,
      image:writers,
      path:"writing",
      name:"WRITERS"
    },
    {
      id: 4,
      image:finances,
      path:"finance",
      name:"FINANCERS"
    },
    {
      id: 5,
      image:third,
      path:"third-party",
      name:"THIRD-PARTY"
    },
    {
      id: 6,
      image:interviewers,
      path:"interview",
      name:"INTERVIEWERS"
    },
    {
      id: 7,
      image:rd,
      path:"research",
      name:"R&D TEAM"
    },
    {
      id: 8,
      image:technical,
      path:"technical",
      name:"TECHNICAL SPECIALISTS"
    },
]


export const status =[
  {
    id:1,
    name:"pending"
  },
  {
    id:1,
    name:"ongoing"
  },
  {
    id:1,
    name:"complete"
  }
]