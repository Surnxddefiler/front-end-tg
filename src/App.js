import { useEffect } from 'react'
import './App.css';
import Header from './components/header/header';
import { useTelegram } from './hooks/useTelegram';
const tg = window.Telegram.WebApp
function App() {
  const {onToggleButton}= useTelegram();
  useEffect(()=>{
    tg.ready();
  })
  return (
    <div className="App">
      <Header/>
      <div>bob</div>
      <button onClick={onToggleButton}>show button</button>
    </div>
  );
}

export default App;
