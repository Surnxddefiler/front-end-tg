import { useEffect } from 'react'
import './App.css';
import Header from './components/header/header';
const tg = window.Telegram.WebApp
console.log(tg)
function App() {
  useEffect(()=>{
    tg.ready();
  })
  return (
    <div className="App">
      <Header/>
      <div>bob</div>
      <button onClick={closeApp}>закрыть</button>
    </div>
  );
}

export default App;
