import { useState } from 'react';
import { BrowserRouter,Route,Routes,useNavigate, useParams, Link, Navigate} from 'react-router-dom';
import './TodoApp.css';
import LogoutComponent from './LogoutComponent';
import LoginComponent from './LoginComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import AuthProvider, { useAuth } from './security/AuthContext';


function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    if(authContext.isAuthenticated)
        return children 

    return <Navigate to="/" />
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
        <AuthProvider>
            <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                <Route path='/' element={<LoginComponent/>} ></Route>
                    <Route path='/login' element={<LoginComponent/>} ></Route>
                    <Route path='/welcome/:username' element={<AuthenticatedRoute> <WelcomeComponent/> </AuthenticatedRoute>} ></Route>        
                    <Route path='/todos' element={<AuthenticatedRoute><ListTodosComponent/> </AuthenticatedRoute>} ></Route>
                    <Route path='/logout' element={<AuthenticatedRoute><LogoutComponent/> </AuthenticatedRoute>} ></Route>
                    <Route path='*' element={<ErrorComponent/>} ></Route>
                    
                </Routes>
              
            </BrowserRouter>
<<<<<<< HEAD
         
        </AuthProvider>
=======
          
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
>>>>>>> 20c879a69d80d0f177be9e2145cfa4041e02e088
        
        </div>
    )
}








<<<<<<< HEAD


=======
                </table>
           </div>
        </div>
    )
}
>>>>>>> 20c879a69d80d0f177be9e2145cfa4041e02e088
