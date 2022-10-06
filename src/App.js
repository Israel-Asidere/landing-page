import './App.css'
import Content from './components/Content'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Services />
      <Content />
    </div>
  )
}

export default App
