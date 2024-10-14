
import './App.css'
import NavBar from './components/organisms/NavBar'
import HomePage from './components/pages/HomePage'

 function App() {
  return (
    <div className="font-rubik">
      <NavBar />
      <main>
        <HomePage/>
      </main>
    </div>
  );
}

export default App
