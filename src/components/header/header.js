import Button from "../button/button"

const Header=()=>{
    const tg = window.Telegram.WebApp
    const closeApp=()=>{
        tg.close();
    }
    return(
        <header>
        <Button onClick={closeApp}>бобики шайбики</Button>
        <span>{tg.initDataUnsafe?.user.username}</span>
        <span>шайба поцык снюс имба</span>
        </header>
    )
}
export default Header