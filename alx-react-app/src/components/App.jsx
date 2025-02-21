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
