import s from './rightup.module.scss'

const Rightmid = () => {


    return(
        <div className={s.all}>
            <div className={s.text}>网址集：</div>
            <div className={s.mods}>
                <div className={s.mod} onClick={()=>{window.open("http://47.96.39.47:80")}}>
                    <div className={s.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 432 432"><path fill="currentColor" d="M397 165q30 0 30 31v103q0 53-39.5 91.5T295 429H124q-48 0-86-38.5T0 300V138q0-57 39-96t96-39h90q44 0 84.5 39.5T350 128v11q0 11 7.5 18.5T378 165zm-262-51q-10 0-17.5 7.5t-7.5 18t7.5 18T135 165h78q10 0 17-8t7-18t-7-17.5t-17-7.5zm154 204q10 0 17.5-6.5T314 295t-7.5-17t-17.5-7H135q-10 0-17.5 7t-7.5 17t7.5 16.5T135 318z"/></svg>
                    </div>
                    <div className={s.icont}>个人博客</div>
                </div>
                <div className={s.mod} onClick={()=>{window.open("http://47.96.39.47:81")}}>
                    <div className={s.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6z"/></svg>
                    </div>
                    <div className={s.icont}>团队首页</div>
                </div>
                
            </div>
        </div>
    )
}

export default Rightmid