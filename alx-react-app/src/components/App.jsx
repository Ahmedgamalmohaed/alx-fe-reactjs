import React from 'react';
import UserProfile from './components/UserProfile';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainContent />
        <UserProfile />
        <Footer />
      </header>
    </div>
  );
}

export default App;
