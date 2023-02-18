import { useCallback, useEffect, useState } from "react"
import './form.css'
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


    const [mondayFourthTeacher, setMondayFourthTeacher] = useState('')
    const [mondaySecondTeacher, setMondaySecondTeacher] = useState('')
    const [mondayThirdTeacher, setMondayThirdTeacher] = useState('')
    const [mondayFirstTeacher, setMondayFirstTeacher] = useState('')

    //

    const [TuesdayFirst, setTuesdayFirst] = useState('')
    const [TuesdaySecond, setTuesdaySecond] = useState('')
    const [TuesdayThird, setTuesdayThird] = useState('')
    const [TuesdayFourth, setTuesdayFourth] = useState('')


    const [TuesdayFourthCabinet, setTuesdayFourthCabinet] = useState('')
    const [TuesdaySecondCabinet, setTuesdaySecondCabinet] = useState('')
    const [TuesdayThirdCabinet, setTuesdayThirdCabinet] = useState('')
    const [TuesdayFirstCabinet, setTuesdayFirstCabinet] = useState('')


    const [TuesdayFourthTeacher, setTuesdayFourthTeacher] = useState('')
    const [TuesdaySecondTeacher, setTuesdaySecondTeacher] = useState('')
    const [TuesdayThirdTeacher, setTuesdayThirdTeacher] = useState('')
    const [TuesdayFirstTeacher, setTuesdayFirstTeacher] = useState('')
    //

    const [WednesdayFirst, setWednesdayFirst] = useState('')
    const [WednesdaySecond, setWednesdaySecond] = useState('')
    const [WednesdayThird, setWednesdayThird] = useState('')
    const [WednesdayFourth, setWednesdayFourth] = useState('')


    const [WednesdayFourthCabinet, setWednesdayFourthCabinet] = useState('')
    const [WednesdaySecondCabinet, setWednesdaySecondCabinet] = useState('')
    const [WednesdayThirdCabinet, setWednesdayThirdCabinet] = useState('')
    const [WednesdayFirstCabinet, setWednesdayFirstCabinet] = useState('')


    const [WednesdayFourthTeacher, setWednesdayFourthTeacher] = useState('')
    const [WednesdaySecondTeacher, setWednesdaySecondTeacher] = useState('')
    const [WednesdayThirdTeacher, setWednesdayThirdTeacher] = useState('')
    const [WednesdayFirstTeacher, setWednesdayFirstTeacher] = useState('')

    //
    const [ThursdayFirst, setThursdayFirst] = useState('')
    const [ThursdaySecond, setThursdaySecond] = useState('')
    const [ThursdayThird, setThursdayThird] = useState('')
    const [ThursdayFourth, setThursdayFourth] = useState('')


    const [ThursdayFourthCabinet, setThursdayFourthCabinet] = useState('')
    const [ThursdaySecondCabinet, setThursdaySecondCabinet] = useState('')
    const [ThursdayThirdCabinet, setThursdayThirdCabinet] = useState('')
    const [ThursdayFirstCabinet, setThursdayFirstCabinet] = useState('')


    const [ThursdayFourthTeacher, setThursdayFourthTeacher] = useState('')
    const [ThursdaySecondTeacher, setThursdaySecondTeacher] = useState('')
    const [ThursdayThirdTeacher, setThursdayThirdTeacher] = useState('')
    const [ThursdayFirstTeacher, setThursdayFirstTeacher] = useState('')


    //
    const [FridayFirst, setFridayFirst] = useState('')
    const [FridaySecond, setFridaySecond] = useState('')
    const [FridayThird, setFridayThird] = useState('')
    const [FridayFourth, setFridayFourth] = useState('')


    const [FridayFourthCabinet, setFridayFourthCabinet] = useState('')
    const [FridaySecondCabinet, setFridaySecondCabinet] = useState('')
    const [FridayThirdCabinet, setFridayThirdCabinet] = useState('')
    const [FridayFirstCabinet, setFridayFirstCabinet] = useState('')


    const [FridayFourthTeacher, setFridayFourthTeacher] = useState('')
    const [FridaySecondTeacher, setFridaySecondTeacher] = useState('')
    const [FridayThirdTeacher, setFridayThirdTeacher] = useState('')
    const [FridayFirstTeacher, setFridayFirstTeacher] = useState('')

    const [group, setGroup] = useState('')
    const onSendData = useCallback(() => {
        const data = {
            group,
            Monday: [
                {
                    course: mondayFirst,
                    room: mondayFirstCabinet,
                    teacher: mondayFirstTeacher
                },
                {
                    course: mondaySecond,
                    room: mondaySecondCabinet,
                    teacher: mondaySecondTeacher
                },
                {
                    course: mondayThird,
                    room: mondayThirdCabinet,
                    teacher: mondayThirdTeacher
                },
                {
                    course: mondayFourth,
                    room: mondayFourthCabinet,
                    teacher: mondayFourthTeacher
                },
            ],
            Tuesday: [
                {
                    course: TuesdayFirst,
                    room: TuesdayFirstCabinet,
                    teacher: TuesdayFirstTeacher
                },
                {
                    course: TuesdaySecond,
                    room: TuesdaySecondCabinet,
                    teacher: TuesdaySecondTeacher
                },
                {
                    course: TuesdayThird,
                    room: TuesdayThirdCabinet,
                    teacher: TuesdayThirdTeacher
                },
                {
                    course: TuesdayFourth,
                    room: TuesdayFourthCabinet,
                    teacher: TuesdayFourthTeacher
                },
            ],
            Wednesday: [
                {
                    course: WednesdayFirst,
                    room: WednesdayFirstCabinet,
                    teacher: WednesdayFirstTeacher
                },
                {
                    course: WednesdaySecond,
                    room: WednesdaySecondCabinet,
                    teacher: WednesdaySecondTeacher
                },
                {
                    course: WednesdayThird,
                    room: WednesdayThirdCabinet,
                    teacher: WednesdayThirdTeacher
                },
                {
                    course: WednesdayFourth,
                    room: WednesdayFourthCabinet,
                    teacher: WednesdayFourthTeacher
                },
            ],
            Thursday: [
                {
                    course: ThursdayFirst,
                    room: ThursdayFirstCabinet,
                    teacher: ThursdayFirstTeacher
                },
                {
                    course: ThursdaySecond,
                    room: ThursdaySecondCabinet,
                    teacher: ThursdaySecondTeacher
                },
                {
                    course: ThursdayThird,
                    room: ThursdayThirdCabinet,
                    teacher: ThursdayThirdTeacher
                },
                {
                    course: ThursdayFourth,
                    room: ThursdayFourthCabinet,
                    teacher: ThursdayFourthTeacher
                },
            ],
            Friday: [
                {
                    course: FridayFirst,
                    room: FridayFirstCabinet,
                    teacher: FridayFirstTeacher
                },
                {
                    course: FridaySecond,
                    room: FridaySecondCabinet,
                    teacher: FridaySecondTeacher
                },
                {
                    course: FridayThird,
                    room: FridayThirdCabinet,
                    teacher: FridayThirdTeacher
                },
                {
                    course: FridayFourth,
                    room: FridayFourthCabinet,
                    teacher: FridayFourthTeacher
                },
            ]

        }
        tg.sendData(JSON.stringify(data))
    }, [tg, mondayFirst, mondaySecond, mondayThird, mondayFourth, mondayFirstCabinet, mondayFirstTeacher, mondaySecondCabinet, mondaySecondTeacher, mondayThirdCabinet, mondayThirdTeacher, mondayFourthCabinet, mondayFourthTeacher,
        TuesdayFirst, TuesdaySecond, TuesdayThird, TuesdayFourth, TuesdayFirstCabinet, TuesdayThirdCabinet, TuesdaySecondCabinet, TuesdayFourthCabinet, TuesdayFirstTeacher, TuesdaySecondTeacher, TuesdayThirdTeacher, TuesdayFourthTeacher,
        WednesdayFirst, WednesdaySecond, WednesdayThird, WednesdayFourth, WednesdayFirstCabinet, WednesdayThirdCabinet, WednesdaySecondCabinet, WednesdayFourthCabinet, WednesdayFirstTeacher, WednesdaySecondTeacher, WednesdayThirdTeacher, WednesdayFourthTeacher,
        ThursdayFirst, ThursdaySecond, ThursdayThird, ThursdayFourth, ThursdayFirstCabinet, ThursdayThirdCabinet, ThursdaySecondCabinet, ThursdayFourthCabinet, ThursdayFirstTeacher, ThursdaySecondTeacher, ThursdayThirdTeacher, ThursdayFourthTeacher,
        FridayFirst, FridaySecond, FridayThird, FridayFourth, FridayFirstCabinet, FridayThirdCabinet, FridaySecondCabinet, FridayFourthCabinet, FridayFirstTeacher, FridaySecondTeacher, FridayThirdTeacher, FridayFourthTeacher, group])
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



    const onChangeMondayFourthTeacher = (e) => {
        setMondayFourthTeacher(e.target.value)
    }
    const onChangeMondayThirdTeacher = (e) => {
        setMondayThirdTeacher(e.target.value)
    }
    const onChangeMondaySecondTeacher = (e) => {
        setMondaySecondTeacher(e.target.value)
    }
    const onChangeMondayFirstTeacher = (e) => {
        setMondayFirstTeacher(e.target.value)
    }

    const onChangeTuesdayFirst = (e) => {
        setTuesdayFirst(e.target.value)
    }
    const onChangeTuesdaySecond = (e) => {
        setTuesdaySecond(e.target.value)
    }
    const onChangeTuesdayThird = (e) => {
        setTuesdayThird(e.target.value)
    }
    const onChangeTuesdayFourth = (e) => {
        setTuesdayFourth(e.target.value)
    }


    const onChangeTuesdayFourthCabinet = (e) => {
        setTuesdayFourthCabinet(e.target.value)
    }
    const onChangeTuesdayThirdCabinet = (e) => {
        setTuesdayThirdCabinet(e.target.value)
    }
    const onChangeTuesdaySecondCabinet = (e) => {
        setTuesdaySecondCabinet(e.target.value)
    }
    const onChangeTuesdayFirstCabinet = (e) => {
        setTuesdayFirstCabinet(e.target.value)
    }



    const onChangeTuesdayFourthTeacher = (e) => {
        setTuesdayFourthTeacher(e.target.value)
    }
    const onChangeTuesdayThirdTeacher = (e) => {
        setTuesdayThirdTeacher(e.target.value)
    }
    const onChangeTuesdaySecondTeacher = (e) => {
        setTuesdaySecondTeacher(e.target.value)
    }
    const onChangeTuesdayFirstTeacher = (e) => {
        setTuesdayFirstTeacher(e.target.value)
    }

    const onChangeWednesdayFirst = (e) => {
        setWednesdayFirst(e.target.value)
    }
    const onChangeWednesdaySecond = (e) => {
        setWednesdaySecond(e.target.value)
    }
    const onChangeWednesdayThird = (e) => {
        setWednesdayThird(e.target.value)
    }
    const onChangeWednesdayFourth = (e) => {
        setWednesdayFourth(e.target.value)
    }


    const onChangeWednesdayFourthCabinet = (e) => {
        setWednesdayFourthCabinet(e.target.value)
    }
    const onChangeWednesdayThirdCabinet = (e) => {
        setWednesdayThirdCabinet(e.target.value)
    }
    const onChangeWednesdaySecondCabinet = (e) => {
        setWednesdaySecondCabinet(e.target.value)
    }
    const onChangeWednesdayFirstCabinet = (e) => {
        setWednesdayFirstCabinet(e.target.value)
    }



    const onChangeWednesdayFourthTeacher = (e) => {
        setWednesdayFourthTeacher(e.target.value)
    }
    const onChangeWednesdayThirdTeacher = (e) => {
        setWednesdayThirdTeacher(e.target.value)
    }
    const onChangeWednesdaySecondTeacher = (e) => {
        setWednesdaySecondTeacher(e.target.value)
    }
    const onChangeWednesdayFirstTeacher = (e) => {
        setWednesdayFirstTeacher(e.target.value)
    }

    //
    const onChangeThursdayFirst = (e) => {
        setThursdayFirst(e.target.value)
    }
    const onChangeThursdaySecond = (e) => {
        setThursdaySecond(e.target.value)
    }
    const onChangeThursdayThird = (e) => {
        setThursdayThird(e.target.value)
    }
    const onChangeThursdayFourth = (e) => {
        setThursdayFourth(e.target.value)
    }


    const onChangeThursdayFourthCabinet = (e) => {
        setThursdayFourthCabinet(e.target.value)
    }
    const onChangeThursdayThirdCabinet = (e) => {
        setThursdayThirdCabinet(e.target.value)
    }
    const onChangeThursdaySecondCabinet = (e) => {
        setThursdaySecondCabinet(e.target.value)
    }
    const onChangeThursdayFirstCabinet = (e) => {
        setThursdayFirstCabinet(e.target.value)
    }



    const onChangeThursdayFourthTeacher = (e) => {
        setThursdayFourthTeacher(e.target.value)
    }
    const onChangeThursdayThirdTeacher = (e) => {
        setThursdayThirdTeacher(e.target.value)
    }
    const onChangeThursdaySecondTeacher = (e) => {
        setThursdaySecondTeacher(e.target.value)
    }
    const onChangeThursdayFirstTeacher = (e) => {
        setThursdayFirstTeacher(e.target.value)
    }



    //
    const onChangeFridayFirst = (e) => {
        setFridayFirst(e.target.value)
    }
    const onChangeFridaySecond = (e) => {
        setFridaySecond(e.target.value)
    }
    const onChangeFridayThird = (e) => {
        setFridayThird(e.target.value)
    }
    const onChangeFridayFourth = (e) => {
        setFridayFourth(e.target.value)
    }


    const onChangeFridayFourthCabinet = (e) => {
        setFridayFourthCabinet(e.target.value)
    }
    const onChangeFridayThirdCabinet = (e) => {
        setFridayThirdCabinet(e.target.value)
    }
    const onChangeFridaySecondCabinet = (e) => {
        setFridaySecondCabinet(e.target.value)
    }
    const onChangeFridayFirstCabinet = (e) => {
        setFridayFirstCabinet(e.target.value)
    }



    const onChangeFridayFourthTeacher = (e) => {
        setFridayFourthTeacher(e.target.value)
    }
    const onChangeFridayThirdTeacher = (e) => {
        setFridayThirdTeacher(e.target.value)
    }
    const onChangeFridaySecondTeacher = (e) => {
        setFridaySecondTeacher(e.target.value)
    }
    const onChangeFridayFirstTeacher = (e) => {
        setFridayFirstTeacher(e.target.value)
    }



    const onChangeGroup = (e) => {
        setGroup(e.target.value)
    }
    return (
        <form>
            <select className="selector" value={group} onChange={onChangeGroup} placeholder="группа">
                <option value={"-"}>-</option>
                <option value={"11-T"}>11-Т</option>
                <option value={"21-T"}>21-Т</option>
                <option value={"31-T"}>31-T</option>
                <option value={"11-TX"}>11-TX</option>
                <option value={"21-TX"}>21-TX</option>
                <option value={"22-TX"}>22-TX</option>
                <option value={"31-TX"}>31-TX</option>
                <option value={"32-TX"}>32-TX</option>
                <option value={"33-TX"}>33-TX</option>
                <option value={"42-TX"}>42-TX</option>
                <option value={"11-K"}>11-K</option>
                <option value={"21-K"}>21-K</option>
                <option value={"31-K"}>31-K</option>
                <option value={"41-K"}>41-K</option>
                <option value={"11-A"}>11-A</option>
                <option value={"21-A"}>21-A</option>
                <option value={"31-A"}>31-A</option>
                <option value={"41-A"}>41-A</option>
                <option value={"21-M"}>21-M</option>
                <option value={"31-M"}>31-M</option>
                <option value={"41-M"}>41-M</option>
                <option value={"21-X"}>21-X</option>
                <option value={"31-X"}>31-X</option>
                <option value={"41-X"}>41-X</option>
            </select>
            <div className="title">понеділок</div>
            <div><input className="inputs" type="text" placeholder="1 пара" onChange={onChangeMondayFirst} value={mondayFirst} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeMondayFirstCabinet} value={mondayFirstCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeMondayFirstTeacher} value={mondayFirstTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="2 пара" onChange={onChangeMondaySecond} value={mondaySecond} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeMondaySecondCabinet} value={mondaySecondCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeMondaySecondTeacher} value={mondaySecondTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="3 пара" onChange={onChangeMondayThird} value={mondayThird} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeMondayThirdCabinet} value={mondayThirdCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeMondayThirdTeacher} value={mondayThirdTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="4 пара" onChange={onChangeMondayFourth} value={mondayFourth} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeMondayFourthCabinet} value={mondayFourthCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeMondayFourthTeacher} value={mondayFourthTeacher} /></div>
            <div className="title">Вівторок</div>
            <div><input className="inputs" type="text" placeholder="1 пара" onChange={onChangeTuesdayFirst} value={TuesdayFirst} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeTuesdayFirstCabinet} value={TuesdayFirstCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeTuesdayFirstTeacher} value={TuesdayFirstTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="2 пара" onChange={onChangeTuesdaySecond} value={TuesdaySecond} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeTuesdaySecondCabinet} value={TuesdaySecondCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeTuesdaySecondTeacher} value={TuesdaySecondTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="3 пара" onChange={onChangeTuesdayThird} value={TuesdayThird} /> <input  className='cabinet' type="text" placeholder="кабінет" onChange={onChangeTuesdayThirdCabinet} value={TuesdayThirdCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeTuesdayThirdTeacher} value={TuesdayThirdTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="4 пара" onChange={onChangeTuesdayFourth} value={TuesdayFourth} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeTuesdayFourthCabinet} value={TuesdayFourthCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeTuesdayFourthTeacher} value={TuesdayFourthTeacher} /></div>
            <div className="title">Середа</div>
            <div><input className="inputs" type="text" placeholder="1 пара" onChange={onChangeWednesdayFirst} value={WednesdayFirst} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeWednesdayFirstCabinet} value={WednesdayFirstCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeWednesdayFirstTeacher} value={WednesdayFirstTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="2 пара" onChange={onChangeWednesdaySecond} value={WednesdaySecond} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeWednesdaySecondCabinet} value={WednesdaySecondCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeWednesdaySecondTeacher} value={WednesdaySecondTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="3 пара" onChange={onChangeWednesdayThird} value={WednesdayThird} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeWednesdayThirdCabinet} value={WednesdayThirdCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeWednesdayThirdTeacher} value={WednesdayThirdTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="4 пара" onChange={onChangeWednesdayFourth} value={WednesdayFourth} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeWednesdayFourthCabinet} value={WednesdayFourthCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeWednesdayFourthTeacher} value={WednesdayFourthTeacher} /></div>
            <div className="title">Четвер</div>
            <div><input className="inputs" type="text" placeholder="1 пара" onChange={onChangeThursdayFirst} value={ThursdayFirst} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeThursdayFirstCabinet} value={ThursdayFirstCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeThursdayFirstTeacher} value={ThursdayFirstTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="2 пара" onChange={onChangeThursdaySecond} value={ThursdaySecond} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeThursdaySecondCabinet} value={ThursdaySecondCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeThursdaySecondTeacher} value={ThursdaySecondTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="3 пара" onChange={onChangeThursdayThird} value={ThursdayThird} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeThursdayThirdCabinet} value={ThursdayThirdCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeThursdayThirdTeacher} value={ThursdayThirdTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="4 пара" onChange={onChangeThursdayFourth} value={ThursdayFourth} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeThursdayFourthCabinet} value={ThursdayFourthCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeThursdayFourthTeacher} value={ThursdayFourthTeacher} /></div>
            <div className="title">Пятниця</div>
            <div><input className="inputs" type="text" placeholder="1 пара" onChange={onChangeFridayFirst} value={FridayFirst} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeFridayFirstCabinet} value={FridayFirstCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeFridayFirstTeacher} value={FridayFirstTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="2 пара" onChange={onChangeFridaySecond} value={FridaySecond} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeFridaySecondCabinet} value={FridaySecondCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeFridaySecondTeacher} value={FridaySecondTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="3 пара" onChange={onChangeFridayThird} value={FridayThird} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeFridayThirdCabinet} value={FridayThirdCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeFridayThirdTeacher} value={FridayThirdTeacher} /></div>
            <div><input className="inputs" type="text" placeholder="4 пара" onChange={onChangeFridayFourth} value={FridayFourth} /> <input className='cabinet' type="text" placeholder="кабінет" onChange={onChangeFridayFourthCabinet} value={FridayFourthCabinet} /> <input className="inputs" type="text" placeholder="викладач" onChange={onChangeFridayFourthTeacher} value={FridayFourthTeacher} /></div>
        </form>
    )
}
export default Schedule