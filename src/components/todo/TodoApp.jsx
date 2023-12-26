import { useState } from 'react';
import { BrowserRouter,Route,Routes,useNavigate, useParams} from 'react-router-dom';
import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<LoginComponent/>} ></Route>
                    <Route path='/login' element={<LoginComponent/>} ></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>} ></Route>        
                    <Route path='/todos' element={<ListTodosComponent/>} ></Route>
                    <Route path='*' element={<ErrorComponent/>} ></Route>
                    
                </Routes>
            </BrowserRouter>
          
        </div>
    )
}

function LoginComponent() {

const [username,setUsername] = useState('in28minutes')
const [password,setPassword] = useState('')
const [showSuccessMessage,setShowSuccessMessage] = useState(false)
const [showErrorMessage,setShowErrorMessage] = useState(false)

const navigate = useNavigate();

function handleUsernameChange(event) {
    setUsername(event.target.value)
}
function handlePasswordChange(event) {
    console.log(event.target.value)
    setPassword(event.target.value)
}
    function handleSubmit() {
        if(username === 'in28minutes' && password === 'dummy') {
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            console.log('Failed')
            setShowErrorMessage(true)
            setShowSuccessMessage(false)
        }
        
    }
    return (
        <div className="Login">
            <h1>Time to Login</h1>
            {showSuccessMessage && <div className="successMessage"> Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage"> Authenticated Failed. Please check your credentials.</div>}
          
            <div className="LoginForm">
                <div>
                    <label>User Name : </label>
                    <input type="text" name ="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" name ="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
      
        </div>
    )
}

function WelcomeComponent() {

    const {username} = useParams()
    console.log(username)

    return (
        <div className="WelcomeComponent">
         <h1>Welcome {username}</h1>
         <div >
            Welcome Component 
         </div>
        </div>
    )
}
function ErrorComponent() {
    return (
        <div className="ErrorComponent">
           <h1>We are working really hard!</h1>
           <div>
            Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
           </div>
        </div>
    )
}

function ListTodosComponent() {
    const todos =[ {id: 1, description: 'Learn AWS'},
                    {id: 2, description: 'Learn Full Stack'},
                    {id: 3, description: 'Learn DevOps'}
                ]

    return (
        <div className="ListTodosComponent">
           <h1>Things You Want To Do!</h1>
           <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key ={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
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