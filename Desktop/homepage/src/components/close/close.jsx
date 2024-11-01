import s from './close.module.scss'
import useStore from '../../store/index'
const Close = (props) => {
    const set = useStore(state => state.sethook)
    function back(){
        set('null')
    }
    return(
        <div className={s.all} >
            <div className={s.title}>{props.name}</div>
            <div className={s.back} onClick={()=>{back()}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22A9.99 9.99 0 0 1 2 12v-.2a10.005 10.005 0 0 1 17.074-6.874A10 10 0 0 1 12 22Zm0-8.59L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.411v-.001Z"/></svg>
            </div>
        </div>
    )
}

export default Close