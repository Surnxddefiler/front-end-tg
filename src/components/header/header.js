import { useTelegram } from "../../hooks/useTelegram"
import Button from "../button/button"

const Header=()=>{
    const tg = window.Telegram.WebApp
    const {closeApp}= useTelegram
    return(
        <header>
        <Button onClick={closeApp}>закрыть</Button>
        <span>{tg.initDataUnsafe?.user.username}</span>
        <span>шайба поцык снюс имба</span>
        </header>
    )
}
export default Header