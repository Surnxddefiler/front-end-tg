import { useEffect } from 'react'
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import AddGroup from './components/addGroup/addGroup';
import AdminForm from './components/AdminForm/AdminForm';
import ChangesForm from './components/ChangesForm/Changes';
import Schedule from './components/form/form';
import Header from './components/header/header';
const tg = window.Telegram.WebApp
function App() {
  useEffect(()=>{
    tg.ready();
  })
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'schedule'} element={<Schedule/>}/>
        <Route path={'changes'} element={<ChangesForm/>}/>
        <Route path={'admin'} element={<AdminForm/>}/>
        <Route path={'newgroup'} element={<AddGroup/>}/>
      </Routes>
    </div>
  );
}

export default App;
