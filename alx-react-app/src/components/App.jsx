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
import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>This is the user profile component.</p>
    </div>
  );
};

export default UserProfile;
export default App;
