import { useCallback, useEffect, useState } from "react"
import '../form/form.css'
const AddGroup = () => {
    const tg = window.Telegram.WebApp
    const [newGroup, setNewGroup] = useState('')
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    })

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    })

    const onSendData = useCallback(() => {
        const newGroupCall = {
            newGroup
        }
        tg.sendData(JSON.stringify(newGroupCall))
    }, [tg, newGroup])

    const onChangeNewGroup = (e) => {
        setNewGroup(e.target.value)
    }

    useEffect(() => {
        if (!newGroup) {
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show();
        }
    })

    return (
        <form>
            <div className="title">додати адміна</div>
            <input className="inputs" type="text" value={newGroup} placeholder='id користуваа' onChange={onChangeNewGroup}/>
        </form>
    )
}
export default AddGroup