
import './App.css'
import Footer from './components/organisms/Footer';
import NavBar from './components/organisms/NavBar'
import HomePage from './components/pages/HomePage'

 function App() {
  return (
    <div className="font-rubik">
      <NavBar />
      <main>
        <HomePage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App
