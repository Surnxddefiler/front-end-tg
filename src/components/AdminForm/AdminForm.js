import { useCallback, useEffect, useState } from "react"

const AdminForm = () => {
    const tg = window.Telegram.WebApp
    const [changes, setChanges] = useState('')
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
            changes
        }
        tg.sendData(JSON.stringify(newAdmin))
    }, [tg, changes])

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
            <input type="text" value={changes} placeholder='id користувача' onChange={onChangeChanges}/>
        </form>
    )
}
export default AdminForm 