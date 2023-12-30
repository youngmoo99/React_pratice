import {useParams, Link} from 'react-router-dom';
export default WelcomeComponent

function WelcomeComponent() {

    const {username} = useParams()
    console.log(username)

    return (
        <div className="WelcomeComponent">
         <h1>Welcome {username}</h1>
         <div >
            Manage your todos - <Link to="/todos">Go here</Link>
         </div>
        </div>
    )
}