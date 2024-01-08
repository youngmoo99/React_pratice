import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodoApi, retrieveAllTodosForUsernameApi} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";


export default ListTodosComponent

function ListTodosComponent() {
    const today = new Date();

    const authContext = useAuth()

    const username = authContext.username

    const navigate = useNavigate()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const [todos,setTodos] = useState([])

    const [message,setMessage] = useState([])

    useEffect ( () => refrestTodos(), [] )

    function refrestTodos() {
        retrieveAllTodosForUsernameApi(username)
        .then(response => {
            //console.log(response.data)
            setTodos(response.data)
        }
        )
        .catch(error => console.log(error))
    }
  
    function deleteTodo(id) {
        console.log('clicked' + id)
        deleteTodoApi(username, id)
        .then(
            //1. 삭제 
            () => {
                setMessage(`Delete of todo with id = ${id} successful`)
                refrestTodos()
            }
            //2. 삭제된 후 리스트 업데이트 

        )
        .catch( error => console.log(error))
    }
    function updateTodo(id) {
        console.log('clicked' + id)
        navigate(`/todo/${id}`)    
    }
    function addNewTodo(id) {
        
        navigate(`/todo/-1`)    
    }

    return (
        <div className="container">
           <h1>Things You Want To Do!</h1>
           {message && <div className="alert alert-warning">{message}</div>}
           <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key ={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning"
                                     onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success"
                                     onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }
                        

                    </tbody>

                </table>
           </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>

        </div>
    )
}