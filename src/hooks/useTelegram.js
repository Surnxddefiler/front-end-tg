const tg = window.Telegram.WebApp
export const useTelegram = () => {

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
        
    }
}