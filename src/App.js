import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './components/styles/mainPage.css'
import '../node_modules/purecss/build/pure.css';
import {Header} from './components/header';
import { MainPage } from './components/mainPage';
import { AboutCourseBlock } from './components/firstBlock';

function App() {
  return (
    <div className='App'>
        <Header/>
        <MainPage/>
        <AboutCourseBlock/>
    </div>
  );
}

export default App;
