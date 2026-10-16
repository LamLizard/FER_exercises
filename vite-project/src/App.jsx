import './App.css'
import Navigation from './Navigation';
import Footer from './Footer';
import Players from './Players';
import Detail from './Detail';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';
import Pets from './Pets';
import Main from '../components/Main';
import HomeLayout from './HomeLayout';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import UserPosts from './UserPosts';
import CountdownTimer from './CountdownTimer';

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

      {/* Exercise 7 + 8 + 9
      <Navigation />
      <HomeLayout />  */}

      {/* Exercise 10 - useEffect
      <UserPosts userId={4} />
      <CountdownTimer initialValue={1000} /> */}

      {/* Exercise 12 - React Router */}
      <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<Players />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
