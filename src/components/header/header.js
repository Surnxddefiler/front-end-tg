import { useTelegram } from "../../hooks/hooks"
import Button from "../button/button"

const Header=()=>{
    const{closeApp}= useTelegram();
    return(
        <header>
        <Button onClick={closeApp}>закрыть</Button>
        <span>р</span>
        <span>шайба поцык снюс имба</span>
        </header>
    )
}
export default Header