const tg = window.Telegram.WebApp
export const useTelegram = () => {
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