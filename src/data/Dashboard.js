

export const FormData = [
    {
        id: 1,
        name: "name",
        placeholder: "Name*",
        type: "text"
    },
    {
        id: 2,
        name: "phone",
        placeholder: "Phone*",
        type: "text"
    },
    {
        id: 3,
        name: "email",
        placeholder: "Email*",
        type: "email"
    },
    {
        id: 4,
        name: "password",
        placeholder: "Eg: Password@1*",
        type: "text"
    },
    {
        id: 5,
        name: "birthDate",
        placeholder: "Date Of Birth*",
        type: "date"
    },
    {
        id: 7,
        name: "qualification",
        placeholder: "Qualification*",
        type: "text"
    },
]


export const Office =[
    {
        id:1,
        name:"Head Office"
    },
]

export const EmpFormData = [
    {
        id: 1,
        name: "name",
        placeholder: "Name*",
        type: "text"
    },
    {
        id: 2,
        name: "phone",
        placeholder: "Phone*",
        type: "text"
    },
    {
        id: 3,
        name: "email",
        placeholder: "Email*",
        type: "email"
    },
    {
        id: 4,
        name: "password",
        placeholder: "Password*",
        type: "text"
    },
    {
        id: 5,
        name: "birthDate",
        placeholder: "Date Of Birth*",
        type: "date"
    },
    {
        id: 6,
        name: "education",
        placeholder: "Education*",
        type: "text"
    },
    // {
    //     id: 7,
    //     name: "department",
    //     placeholder: "Department*",
    //     type: "text"
    // },

]


export const Address = [
    {
        id: 1,
        name: "houseName",
        placeholder: "House Name*",
        type: "text"
    },
    {
        id: 2,
        name: "city",
        placeholder: "City*",
        type: "text"
    },
    {
        id: 3,
        name: "state",
        placeholder: "State*",
        type: "test"
    },
    {
        id: 4,
        name: "pin",
        placeholder: "PIN*",
        type: "text"
    },
]

export const Intake = [
    { id: 1, name: "Fall" },
    { id: 2, name: "Spring" },
    { id: 3, name: "Winter" },
    { id: 4, name: "Summer" },
    { id: 5, name: "January" },
    { id: 6, name: "February" },
    { id: 7, name: "March" },
    { id: 8, name: "April" },
    { id: 9, name: "May" },
    { id: 10, name: "June" },
    { id: 11, name: "July" },
    { id: 12, name: "August" },
    { id: 13, name: "September" },
    { id: 14, name: "October" },
    { id: 15, name: "November" },
    { id: 16, name: "December" },
];


export const FilterData = [
    {
        id: 1,
        type: "",
        name: "country",
        options: [
            { id: 1, name: "USA" },
            { id: 2, name: "UK" },
            { id: 3, name: "Canada" },
            { id: 4, name: "Australia" },
            { id: 5, name: "Germany" },
            { id: 6, name: "France" },
            { id: 7, name: "Netherlands" },
            { id: 8, name: "New Zealand" },
            { id: 9, name: "Singapore" },
            { id: 10, name: "Ireland" },
            { id: 11, name: "Italy" },
            { id: 12, name: "China" },
            { id: 13, name: "Japan" },
        ],
        placeholder: "",
        icon: ""
    },
    {
        id: 2,
        type: "",
        name: "intake",
        options: [...Intake],
        placeholder: "",
        icon: ""
    },
    {
        id: 3,
        type: "",
        name: "status",
        options: [
            {id:1, name:"pending"},
            {id:2, name:"ongoing"},
            {id:3, name:"completed"},
            {id:4, name:"deffered"},
            {id:5, name:"cancelled"},
            {id:6, name:"non-enrolled"},
        ],
        placeholder: "",
        icon: ""
    },
]