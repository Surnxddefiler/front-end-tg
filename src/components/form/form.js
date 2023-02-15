import { useCallback, useEffect, useState } from "react"

const Schedule = () => {
    const tg = window.Telegram.WebApp
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    })
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [fourth, setFourth] = useState('')
    const [group, setGroup] = useState('')
    const onSendData = useCallback(() => {
        const data = {
            first,
            second,
            third,
            fourth,
            group
        }
        tg.sendData(JSON.stringify(data))
    }, [tg, first, second, third, fourth, group])
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    })
    useEffect(() => {
        if (!first || !second || !third) {
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show();
        }
    })
    const onChangeFirst = (e) => {
        setFirst(e.target.value)
    }
    const onChangeSecond = (e) => {
        setSecond(e.target.value)
    }
    const onChangeThird = (e) => {
        setThird(e.target.value)
    }
    const onChangeFourth = (e) => {
        setFourth(e.target.value)
    }
    const onChangeGroup = (e) => {
        setGroup(e.target.value)
    }
    return (
        <form>
            <input type="text" placeholder="1 пара" onChange={onChangeFirst} value={first} />
            <input type="text" placeholder="2 пара" onChange={onChangeSecond} value={second} />
            <input type="text" placeholder="3 пара" onChange={onChangeThird} value={third} />
            <input type="text" placeholder="4 пара" onChange={onChangeFourth} value={fourth} />
            <select value={group} onChange={onChangeGroup} placeholder="группа">
                <option value={"-"}>-</option>
                <option value={"K41"}>41-К</option>
                <option value={"K31"}>31-K</option>
            </select>
        </form>
    )
}
export default Schedule