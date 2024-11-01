import s from './abouteweb.module.scss'
import Close from '../close/close'
import
{ Progress }
from
"antd"
;
import {gettoday,getmonth,getTime} from '../../utils/getTime'
const Aboutweb = () => {
    const today = Math.floor(gettoday()*100)
    const month = (getmonth()*100).toFixed(2)
    const day = (getTime()*100).toFixed(2)
    const name = "关于网站"
    return(
        <div className={s.all}>
            <Close name={name}/>
            <div className={s.mods}>
                <div className={s.key}>前端技术栈</div>
                <div className={s.value}>React Js html scss </div>
            </div>
            <div className={s.mods}>
                <div className={s.key}>网站制作</div>
                <div className={s.value}>Clarca</div>
            </div>
            <div className={s.mods}>
                <div className={s.key}>网站上线</div>
                <div className={s.value}>2024-10-15</div>
            </div>
            <div className={s.pro}>
                <div className={s.text}>今日已经过去</div>
                <Progress percent={today} size={{width:'100%',height:'15px'}}/>
            </div>
            <div className={s.pro}>
                <div className={s.text}>这个月已经过去</div>
                <Progress percent={month} size={{width:'100%',height:'15px'}}/>
            </div>
            <div className={s.pro}>
                <div className={s.text}>今年已经过去</div>
                <Progress percent={day} size={{width:'100%',height:'15px'}}/>
            </div>
        </div>
    )
}

export default Aboutweb