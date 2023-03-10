import { useCallback, useEffect, useState } from "react"
import '../form/form.css'
const AdminForm = () => {
    const tg = window.Telegram.WebApp
    const [newAdmin, setNewAdmin] = useState('')
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
        const newAdminCall = {
            newAdmin
        }
        tg.sendData(JSON.stringify(newAdminCall))
    }, [tg, newAdmin])

    const onChangeNewAdmin = (e) => {
        setNewAdmin(e.target.value)
    }

    useEffect(() => {
        if (!newAdmin) {
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show();
        }
    })

    return (
        <form>
            <div className="title">додати адміна</div>
            <input className="inputs" type="number" value={newAdmin} placeholder='id користуваа' onChange={onChangeNewAdmin}/>
        </form>
    )
}
export default AdminForm 