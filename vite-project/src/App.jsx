import './App.css'
import Navigation from './Navigation';
import Pets from './Pets';
import Footer from './Footer';
import Players from './Players';
import Main from '../components/Main';
import HomeLayout from './HomeLayout';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <>
      {/* Exercise 4
      <Navigation />
      <Pets />
      <Footer /> 
      */}

      {/* Exercise 5
      <Players />
      */}

      {/* Exercise 6
      <Navigation />
      <Main />
      <Footer /> 
      */}

      {/* Exercise 7 + 8 + 9 */}
      <Navigation />
      <HomeLayout /> 

      
    </>
  );
}

export default App;
