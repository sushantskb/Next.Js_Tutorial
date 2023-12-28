"use client"
const StudentDetails = ({params}) => {
    console.log(params)
    return (
        <>
            <h1>Students Details</h1>
            <h3>Name : {params.student}</h3>
        </>
    )
}

export default StudentDetails;