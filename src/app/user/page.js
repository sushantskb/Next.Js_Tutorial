const User = () => {
    return (
        <>
            <h1>User Page</h1>
        </>
    )
}

const generateMetadata = ({params})=> {
    return{
        title: "User Page Title",
        description: "The description goes here"
    }
}

export default User;
export {generateMetadata}