import { useEffect, useState } from "react"

const Schedule=()=>{
    const tg = window.Telegram.WebApp
    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    })
    const[first, setFirst]= useState('')
    const[second, setSecond]= useState('')
    const[third, setThird]= useState('')
    const[fourth, setFourth]= useState('')
    useEffect(()=>{
        if(!first || !second || !third){
            tg.MainButton.hide()
        }
        else{
            tg.MainButton.show();
        }
    })
    const onChangeFirst=(e)=>{
        setFirst(e.targer.value)
    }
    const onChangeSecond=(e)=>{
        setSecond(e.targer.value)
    }
    const onChangeThird=(e)=>{
        setThird(e.targer.value)
    }
    const onChangeFourth=(e)=>{
        setFourth(e.targer.value)
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