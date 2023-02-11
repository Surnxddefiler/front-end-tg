import { useEffect, useState } from "react"

const Schedule=()=>{
    const tg = window.Telegram.WebApp
    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    })
    const[first, setFirst]= useState('1 боб')
    const[second, setSecond]= useState('2 боб')
    const[third, setThird]= useState('3 боб')
    const[fourth, setFourth]= useState('4 боб')
    useEffect(()=>{
        if(!first || !second || !third){
            tg.MainButton.hide()
        }
        else{
            tg.MainButton.show();
        }
    })
    const onChangeFirst=(e)=>{
        setFirst(e.target.value)
    }
    const onChangeSecond=(e)=>{
        setSecond(e.target.value)
    }
    const onChangeThird=(e)=>{
        setThird(e.target.value)
    }
    const onChangeFourth=(e)=>{
        setFourth(e.target.value)
    }
    return(
        <form>
            <input type="text" placeholder="1 пара" onChange={onChangeFirst} value={first} />
            <input type="text" placeholder="2 пара" onChange={onChangeSecond} value={second}/>
            <input type="text" placeholder="3 пара"  onChange={onChangeThird} value={third}/>
            <input type="text" placeholder="4 пара"  onChange={onChangeFourth} value={fourth}/>
        </form>
    )
}
export default Schedule