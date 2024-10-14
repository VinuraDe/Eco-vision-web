import { useState } from 'react'
import './App.css'
import NavBar from './components/organisms/NavBar'
import Hero from './components/organisms/Hero'
import LiteratureSurvey from './components/organisms/LiteratureSurvey'
import Gap from './components/organisms/Gap'
import ResearchProblemAndSolution from './components/organisms/ResearchProblemAndSolution'
import Objectives from './components/organisms/Objectives'
import Methodology from './components/organisms/Methodology'
import Technologies from './components/organisms/Technologies'
import Timeline from './components/organisms/Timeline'
import Documents from './components/organisms/Documents'
import Contact from './components/organisms/Contact'
import Team from './components/organisms/Team'

 function App() {
  return (
    <div className='font-rubik'>
      <NavBar/>
      <Hero/>
      <LiteratureSurvey/>
      <Gap/>
      <ResearchProblemAndSolution/>
      <Objectives/>
      <Methodology/>
      <Technologies/>
      <Timeline/>
      <Documents/>
      <Team/>
      <Contact/>
    </div>
  )
}

export default App
