"use client"
const Lectures = ({params}) => {
    return (
        <>
            <h1>Day of College : {params.lecture[0]} </h1>
            <h2>Lecture Number : {params.lecture[1]} </h2>
        </>
    )
}

export default Lectures;