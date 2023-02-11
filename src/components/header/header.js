import { useTelegram } from "../../hooks/useTelegram"
import Button from "../button/button"

const Header=()=>{
    const tg = window.Telegram.WebApp
    const {closeApp}= useTelegram();
    return(
        <header>
        <Button onClick={closeApp}>закрыть</Button>
        <div>{tg.initDataUnsafe?.user.username}</div>
        </header>
    )
}
export default Header