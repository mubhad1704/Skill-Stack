import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import AddSkill from './pages/AddSkill'
import SkillList from './pages/SkillList'
import EditSkill from './pages/EditSkill'
import Pnf from './pages/Pnf'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/'  element={<LandingPage/>}/>
        <Route path='/dashboard'  element={<Dashboard/>}/>
        <Route path='/add'  element={<AddSkill/>}/>
        <Route path='/skills'  element={<SkillList/>}/>
        <Route path='/edit/:id'  element={<EditSkill/>}/>
        <Route path='/*'  element={<Pnf/>}/>

      </Routes>
    </>
  )
}

export default App
