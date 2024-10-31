import s from './index.module.scss'
import Loading from '../../components/loading/loading'
import Leftava from '../../components/leftava/leftava'
import Leftcard from '../../components/leftcard/leftcard'
import Leftlink from '../../components/leftlink/leftlink'
import Rightup from '../../components/rightup/rightup'
const Index = () => {
    return (

        <div className={s.all}>
            {/* <Loading /> */}
            <div className={s.bcg}>
                {/* <img src={require("../../static/img/bcg3.webp")}></img> */}
            </div>
            <div className={s.mod}>
              <div className={s.left}>
                <Leftava />
                <Leftcard />
                <Leftlink />
              </div>
              <div className={s.right}>
                <Rightup />
              </div>
            </div>
        </div>
    )
}

export default Index