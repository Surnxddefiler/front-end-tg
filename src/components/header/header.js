import { useTelegram } from "../../hooks/useTelegram"
import Button from "../button/button"
import style from "./header.module.css"

const Header=()=>{
    const {closeApp}= useTelegram();
    return(
        <header className={style.header}>
        <Button onClick={closeApp}>закрыть</Button>
        <div>Nuht</div>
        </header>
    )
}
export default Header