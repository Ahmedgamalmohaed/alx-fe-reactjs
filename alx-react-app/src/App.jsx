import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
src/App.jsx doesn't contain: ["WelcomeMessage", "<WelcomeMessage />"]
 ["import Header from", "import MainContent from", "import Footer from"] 
  src/App.jsx doesn't contain: ["<Header />", "<Footer />", "<MainContent />"]
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    
      <h1>hello wolrd</h1>
      <h4>react tailwind css</h4>
    </>
  );
}

export default App;
