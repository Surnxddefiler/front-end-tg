export const useTelegram = () => {
    const tg = window.Telegram.WebApp
    const closeApp = () => {
        tg.close();
    }
    const onToggleButton=()=>{
        if(tg.MainButton.isVisible){
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
        }
    }
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        closeApp,
        onToggleButton
    }
}