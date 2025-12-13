import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import AddSkill from './pages/AddSkill'
import SkillList from './pages/SkillList'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/'  element={<LandingPage/>}/>
        <Route path='/dashboard'  element={<Dashboard/>}/>
        <Route path='/add'  element={<AddSkill/>}/>
        <Route path='/skill'  element={<SkillList/>}/>
      </Routes>
    </>
  )
}

export default App
