import "./App.css"
import { BrowserRouter as   Router, Route, Routes } from "react-router-dom"
import * as React from "react"
import { routes } from "./utils/routes"
import Home from "./pages/home/Home"
import Navbar from "./pages/home/components/Navbar"
import HomePage from "./pages/home/components/HomePage"

function App() {
  return (
    <>
      <Navbar/>
      <HomePage/>
    </>
    
    /*
    <Router>
      
      <Routes>
        {routes.map((r) => {
          return <Route path={r.path} element={r.element} key={r.id} />
        })}
      </Routes>
    </Router>
    */
    
  )
}
export default App

