import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css'
import Counter from './components/Counter';
src/components/Counter.jsx doesn't contain: ["Increment", "Decrement", "Reset"]
  
src/components/UserProfile.jsx doesn't exist

function App() {

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
    </>
  )
}

export default App;
