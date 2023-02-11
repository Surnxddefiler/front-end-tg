import react, { useEffect } from 'react'
import './App.css';
const tg = window.Telegram.WebApp
console.log(tg)
function App() {
  useEffect(()=>{
    tg.ready();
  })
  const closeApp=()=>{
    tg.close();
  }
  return (
    <div className="App">
      bob
      <button onClick={closeApp}>закрыть</button>
    </div>
  );
}

export default App;
