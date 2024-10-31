import s from './leftava.module.scss'

const Leftava = () => {
    return(
        <div className={s.all}>
            <div className={s.img}>
                <img src={require("../../static/img/ava.png")} className={s.ava}></img>
            </div>
            <div className={s.text}>Clarca</div>
        </div>
    )
}

export default Leftava