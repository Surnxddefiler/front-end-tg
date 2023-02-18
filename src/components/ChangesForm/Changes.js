import { useCallback, useEffect, useState } from "react"

const ChangesForm = () => {
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
        const Changed = {
            changes
        }
        tg.sendData(JSON.stringify(Changed))
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
            <div>заміни</div>
            <textarea type="image" value={changes} placeholder='url на картинку' onChange={onChangeChanges}></textarea>
        </form>
    )
}
export default ChangesForm