
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Projects from './pages/projects'
import Tasks from './pages/tasks'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Settings from './pages/settings'
import Calendar from './pages/calendar'
import Client from './pages/clients'
import Dashboard from './pages/dashboard'
import Team from './pages/team'

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formdata, setFormdata] = useState({ user: "", pass: "" })

  const print = (e) => {
    e.preventDefault()
    console.log(formdata)
  }

  function handlechange(e) {
    e.preventDefault()
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  {/*
  const handlesubmit = (event) => {
    event.preventDefault()
    console.log(email, password)
  }

  function print() {
    console.log("Printing statements")
    console.log(email, password)
  }
  */}

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>

      <>
        {/*
        <div className="text-blue-500">HI</div>
        <div className="email">Email</div>
        <input type="email" required placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <div className="password">Password</div>
        <input type="password" required placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={() => console.log(email, password)}>
          Submit
        </button>
        */}
      </>
    </>
  )
}

export default App
