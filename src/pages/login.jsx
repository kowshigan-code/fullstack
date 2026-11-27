
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const location = useLocation()

    const [logindata, setFormdata] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        setFormdata({
            ...logindata,
            [e.target.name]: e.target.value
        })
    }

    function handlesubmit(e) {
        e.preventDefault()

        const registerdata = location.state

        console.log(logindata)
        console.log(registerdata)

        if (registerdata &&
            logindata.username === registerdata.email &&
            logindata.password === registerdata.password) {

            navigate("/dashboard", {
                state: logindata
            })

        } else {
            alert("Invalid Credentials")
        }
    }

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handlesubmit}>

                <input
                    type="email"
                    placeholder="Enter email"
                    name="username"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login
