import { useContext } from "react"
import { AuthContext } from "./security/AuthContext"

export default FooterComponent 
function FooterComponent() {
    const authContext = useContext(AuthContext)
    return (
        <footer className="footer">
            <div className ="container">
                Your Footer
            </div>
           <hr/> 
        </footer>
    )
}