import './App.css';
import Counter from './components/Counter';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <h1>React Hooks Context Practice</h1> 
      <Counter />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
