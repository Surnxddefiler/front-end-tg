import { useEffect } from 'react'
import './App.css';
import Header from './components/header/header';
import { tg, useTelegram } from './hooks/useTelegram';

console.log(tg)
function App() {
  const {onToggleButton}= useTelegram();
  useEffect(()=>{
    tg.ready();
  })
  return (
    <div className="App">
      <Header/>
      <div>bob</div>
      <button onClick={onToggleButton}>закрыть</button>
    </div>
  );
}

export default App;
