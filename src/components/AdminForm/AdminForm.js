import { useCallback, useEffect, useState } from "react"

const AdminForm = () => {
    const tg = window.Telegram.WebApp
    const [newAdmin, setChanges] = useState('')
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
        const newAdmin = {
            newAdmin
        }
        tg.sendData(JSON.stringify(newAdmin))
    }, [tg, newAdmin])

    const onChangeChanges = (e) => {
        setChanges(e.target.value)
    }

    useEffect(() => {
        if (!changes) {
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show();
        }
    })

    return (
        <form>
            <div>додати адміна</div>
            <input type="number" value={newAdmin} placeholder='id користувача' onChange={onChangeChanges}/>
        </form>
    )
}
export default AdminForm 