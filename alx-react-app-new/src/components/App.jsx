import React from 'react';
import UserProfile from './components/UserProfile';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './components/Counter';
import ProfilePage from './ProfilePage'; // Import ProfilePage
import { UserProvider } from './components/UserContext'; // Import UserProvider

const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider userData={userData}>
          <Header />
          <MainContent />
          <ProfilePage /> {/* Wrap ProfilePage inside UserProvider */}
          <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
          <Footer />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
