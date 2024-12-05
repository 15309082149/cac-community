import s from './topbar.module.scss'
import { Fragment } from 'react'
import cacSign from '../../static/img/cac-sign.png'
import Input from '../input/input'
const Topbar = () => {
    // const cacSign: string = '../static/img/cac-sign.png'
    return(
        <Fragment>
            <div className={s.zw}></div>
            <header className={s.all}>
                <div className={s.sign}>
                    <img src={cacSign}></img>
                </div>
                <Input></Input>
            </header>
        </Fragment>
    )
}

export default Topbar