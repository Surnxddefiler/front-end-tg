import style from './button.module.css'
const Button=(props)=>{
    return(
        <button {...props} className={style.button}/>
    )
}
export default Button