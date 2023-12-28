import  Link  from "next/link";
const StudentList = () => {
    return (
        <>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentList/suraj">Suarj</Link>
                </li>
                <li>
                    <Link href="/studentList/goutam">Goutam</Link>
                </li>
                <li>
                    <Link href="/studentList/jagdish">Jagdish</Link>
                </li>
            </ul>
        </>
    )
}

export default StudentList;