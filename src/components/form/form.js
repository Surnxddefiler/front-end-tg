import { useCallback, useEffect, useState } from "react"

const Schedule = () => {
    const tg = window.Telegram.WebApp
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    })
    const [mondayFirst, setMondayFirst] = useState('')
    const [mondaySecond, setMondaySecond] = useState('')
    const [mondayThird, setMondayThird] = useState('')
    const [mondayFourth, setMondayFourth] = useState('')
    const [group, setGroup] = useState('')
    const onSendData = useCallback(() => {
        const data = {
            group,
            Monday: [
                {
                    course: mondayFirst,
                },
                {
                    course: mondaySecond,
                },
                {
                    course: mondayThird,
                },
                {
                    course: mondayFourth,
                },
            ]

        }
        tg.sendData(JSON.stringify(data))
    }, [tg, mondayFirst, mondaySecond, mondayThird, mondayFourth, group])
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    })
    useEffect(() => {
        if (!mondayFirst || !mondaySecond || !mondayThird) {
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show();
        }
    })
    const onChangeMondayFirst = (e) => {
        setMondayFirst(e.target.value)
    }
    const onChangeMondaySecond = (e) => {
        setMondaySecond(e.target.value)
    }
    const onChangeMondayThird = (e) => {
        setMondayThird(e.target.value)
    }
    const onChangeMondayFourth = (e) => {
        setMondayFourth(e.target.value)
    }
    const onChangeGroup = (e) => {
        setGroup(e.target.value)
    }
    return (
        <form>
            <input type="text" placeholder="1 пара" onChange={onChangeMondayFirst} value={mondayFirst} />
            <input type="text" placeholder="2 пара" onChange={onChangeMondaySecond} value={mondaySecond} />
            <input type="text" placeholder="3 пара" onChange={onChangeMondayThird} value={mondayThird} />
            <input type="text" placeholder="4 пара" onChange={onChangeMondayFourth} value={mondayFourth} />
            <select value={group} onChange={onChangeGroup} placeholder="группа">
                <option value={"-"}>-</option>
                <option value={"K-41"}>41-К</option>
                <option value={"K-31"}>31-K</option>
            </select>
        </form>
    )
}
export default Schedule