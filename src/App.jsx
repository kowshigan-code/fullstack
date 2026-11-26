import { BrowserRouter, Routes, Route } from "react-router-dom"
import Calendar from "./pages/calendar"
import Clients from "./pages/clients"
import Dashboard from "./pages/dashboard"
import Team from "./pages/team"
import Settings from "./pages/settings"
import Login from "./pages/login"
import Projects from "./pages/projects"
import Tasks from "./pages/tasks"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App