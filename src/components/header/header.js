import Button from "../button/button"

const Header=()=>{
    const tg = window.Telegram.WebApp
    const closeApp=()=>{
        tg.close();
      }
    return(
        <header>
        <Button>бобики шайбики</Button>
        <span> {tg.initDataUnsafe?.user.username}</span>
        </header>
    )
}
export default Header