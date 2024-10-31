import s from './rightup.module.scss'

const Rightup = () => {
    const links = [
        {name:'网站设置'},
        {name:'网站设置'},
        {name:'网站设置'},
        {name:'网站设置'},
        {name:'网站设置'},
    ]
    return(
        <div className={s.all}>
            <div className={s.text}>本站链接：</div>
            <div className={s.mods}>
                <div className={s.mod}></div>
            </div>
        </div>
    )
}

export default Rightup