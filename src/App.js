import { useEffect } from 'react'
import './App.css';
import Header from './components/header/header';
const tg = window.Telegram.WebApp
console.log(tg)
const onToggleButton=()=>{
  if(tg.MainButton.isVisible){
    tg.MainButton.hide();
  }
  else{
    tg.MainButton.show();
  }
}
function App() {
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
