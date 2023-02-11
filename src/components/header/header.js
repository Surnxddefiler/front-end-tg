import { useTelegram } from "../../hooks/useTelegram"
import Button from "../button/button"
import style from "./header.module.css"

const Header=()=>{
    const tg = window.Telegram.WebApp
    const {closeApp}= useTelegram();
    return(
        <header className={style.header}>
        <Button onClick={closeApp}>закрыть</Button>
        <div>{tg.initDataUnsafe?.user.username}</div>
        </header>
    )
}
export default Header