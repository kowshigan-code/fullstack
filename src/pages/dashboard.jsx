
import { useState } from "react"
import { useLocation } from "react-router-dom"

function Dashboard() {

    const location = useLocation()
    const [userdata, setUserdata] = useState("")

    function displaydata() {
        setUserdata(location.state)
        console.log(location.state)
    }

    return (
        <>
            <h1>Dashboard</h1>

            <button onClick={displaydata}>Button</button>

            <h3>Welcome {userdata?.username}</h3>
            <p>Email: {userdata?.username}</p>
        </>
    )
}

export default Dashboard
