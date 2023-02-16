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
    const [mondayFourthCabinet, setMondayFourthCabinet] = useState('')
    const [mondaySecondCabinet, setMondaySecondCabinet] = useState('')
    const [mondayThirdCabinet, setMondayThirdCabinet] = useState('')
    const [mondayFirstCabinet, setMondayFirstCabinet] = useState('')
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
    const onChangeMondayFourthCabinet = (e) => {
        setMondayFourthCabinet(e.target.value)
    }
    const onChangeMondayThirdCabinet = (e) => {
        setMondayThirdCabinet(e.target.value)
    }
    const onChangeMondaySecondCabinet = (e) => {
        setMondaySecondCabinet(e.target.value)
    }
    const onChangeMondayFirstCabinet = (e) => {
        setMondayFirstCabinet(e.target.value)
    }
    const onChangeGroup = (e) => {
        setGroup(e.target.value)
    }
    return (
        <form>
            <select value={group} onChange={onChangeGroup} placeholder="группа">
                <option value={"-"}>-</option>
                <option value={"K-14"}>41-К</option>
                <option value={"K-13"}>31-K</option>
            </select>
            <input type="text" placeholder="1 пара" onChange={onChangeMondayFirst} value={mondayFirst} /> <input type="number" placeholder="кабінет" onChange={onChangeMondayFirstCabinet} value={mondayFirstCabinet} />
            <input type="text" placeholder="2 пара" onChange={onChangeMondaySecond} value={mondaySecond} /> <input type="number" placeholder="кабінет" onChange={onChangeMondaySecondCabinet} value={mondaySecondCabinet} />
            <input type="text" placeholder="3 пара" onChange={onChangeMondayThird} value={mondayThird} /> <input type="number" placeholder="кабінет" onChange={onChangeMondayThirdCabinet} value={mondayThirdCabinet} />
            <input type="text" placeholder="4 пара" onChange={onChangeMondayFourth} value={mondayFourth} /> <input type="number" placeholder="кабінет" onChange={onChangeMondayFourthCabinet} value={mondayFourthCabinet} />
        </form>
    )
}
export default Schedule