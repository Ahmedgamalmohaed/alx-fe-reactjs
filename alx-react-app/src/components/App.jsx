import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainContent />
        <UserProfile />
        <Counter />  {/* Add Counter component here */}
        <Footer />
      </header>
    </div>
  );
}
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
    </div>
  );
}
export default App;
