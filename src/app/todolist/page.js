async function fetchData() { 
    let data = await fetch("https://dummyjson.com/todos");
    data = await data.json();
    return data.todos;
}

const ToDoList = async() => {
    let todoList = await fetchData();
    return <>
        <div>
            <h1>To Do Items</h1>
            {
                todoList.map((item, index) => (
                    <div key={index}>
                        <h2>List : {item.todo}</h2>
                        <hr />
                    </div>
                ))
            }
        </div>
    </>
}

export default ToDoList;