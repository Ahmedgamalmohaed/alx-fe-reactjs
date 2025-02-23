import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
src/App.jsx doesn't contain: ["WelcomeMessage", "<WelcomeMessage />"]
 ["import Header from", "import MainContent from", "import Footer from"] 
  src/App.jsx doesn't contain: ["import UserProfile"]
  src/App.jsx doesn't contain: ["<Header />", "<Footer />", "<MainContent />"]
  src/components/UserProfile.jsx doesn't contain: ["{props.name}", "{props.age}", "Age", "{props.bio}", "Bio"] 
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
