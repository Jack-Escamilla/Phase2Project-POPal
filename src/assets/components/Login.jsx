import {useNavigate} from "react-router-dom"

const Login = () => {
    
    const navigate = useNavigate()
    
    return (
        <div>
            <div>
                {/* <form> */}
                    <div>
                        <div>
                             <h2>User Login</h2>
                        </div>

                        <div>
                            <label>UserName</label>
                            <input></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input></input>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>{navigate("/home")}} className="button1">Login</button>
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
}
export default Login