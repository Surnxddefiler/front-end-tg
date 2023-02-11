export const useTelegram = () => {
    const tg = window.Telegram.WebApp
    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.show();
        }
    }
    const closeApp=()=>{
        tg.close();
    }
    return{
        onToggleButton,
        closeApp,
        tg,
    }
}