import { useEffect } from 'react'
import './App.css';
import Header from './components/header/header';
import { useTelegram } from './hooks/hooks';
function App() {
  const{tg, onToggleButton}= useTelegram
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
