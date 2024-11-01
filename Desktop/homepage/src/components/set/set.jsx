import s from './set.module.scss'
import Close from '../../components/close/close'
const Set = () => {
    const name = "设置"
    return(
        <div className={s.all}>
            <Close name={name}/>
        </div>
    )
}

export default Set