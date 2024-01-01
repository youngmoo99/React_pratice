
export default ListTodosComponent

function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos =[ {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
                    {id: 2, description: 'Learn Full Stack',done: false, targetDate:targetDate },
                    {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate}
                ]

    return (
        <div className="container">
           <h1>Things You Want To Do!</h1>
           <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key ={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                        

                    </tbody>

                </table>
           </div>
        </div>
    )
}