
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'
import Projects from './pages/projects'
import Tasks from './pages/tasks'
import Settings from './pages/settings'
import Calendar from './pages/calendar'
import Client from './pages/clients'
import Dashboard from './pages/dashboard'
import Team from './pages/team'
import './App.css'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/project" element={<Projects />} />
                <Route path="/task" element={<Tasks />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/clients" element={<Client />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
