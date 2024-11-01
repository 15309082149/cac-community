import s from './index.module.scss'
import Loading from '../../components/loading/loading'
import Leftava from '../../components/leftava/leftava'
import Leftcard from '../../components/leftcard/leftcard'
import Leftlink from '../../components/leftlink/leftlink'
// import Leftcat from '../../components/leftcat/leftcat'
import Rightup from '../../components/rightup/rightup'
import Rightmid from '../../components/rightmid/rightmid'
import Set from '../../components/set/set'
import useStore from '../../store/index'
import Aboutweb from '../../components/aboutweb/aboutweb'
import {useEffect,useState } from 'react'
const Index = () => {
  const name1= useStore(state => state.hook)
  console.log(name1)
  // const [name,setname] = useState(null)
  useEffect(()=>{
    // setname(name1)
    // const width = document.documentElement.clientWidth
    // console.log(document.documentElement.clientWidth)


    if(name1 === '') {

    }
  else if(name1 === 'null') {
    const right = document.getElementById('right')
    const hook = document.getElementById('hook')
    right.style.opacity = 1
    right.style.visibility = 'visible'
    hook.style.opacity = 0
    hook.style.visibility = 'hidden'
  }
  else{
    const right = document.getElementById('right')
    const hook = document.getElementById('hook')
    right.style.opacity = 0
    right.style.visibility = 'hidden'
    hook.style.opacity = 1
    hook.style.visibility = 'visible'
  }
  },[name1])


  function switchr() {
      const left = document.getElementById('left')
      const right = document.getElementById('right')
      const b = document.getElementById('rb')
      b.style.display = 'flex'
      left.style.visibility = 'hidden'
      left.style.opacity = 0
      // right.style.display = 'grid'
      right.style.visibility = 'visible'
      right.style.opacity = 1
  }
  function switchl() {
      const left = document.getElementById('left')
      const right = document.getElementById('right')
      left.style.visibility = 'visible'
      left.style.opacity = 1
      right.style.visibility = 'hidden'
      right.style.opacity = 0
  }
  const getdata1 = (e)=>{
    console.log(e)
  }
    return (

        <div className={s.all}>
            <Loading />
            <div className={s.mod}>
              <div className={s.left} id="left">
                <Leftava />
                <Leftcard />
                <Leftlink />
                <div className={s.leftbotton} onClick={()=>{switchr()}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M384 1280v-128h1664v128zm0 384v-128h1664v128zm0-768V768h1664v128zm0-512h1664v128H384z"/></svg>
                </div>
              </div>
              <div className={s.right} id="right">
                <Rightup getdata={getdata1}/>
                <Rightmid />
                <div className={s.rightbotton} onClick={()=>{switchl()}} id='rb'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M384 1280v-128h1664v128zm0 384v-128h1664v128zm0-768V768h1664v128zm0-512h1664v128H384z"/></svg>
                </div>
              </div>
              <div className={s.righthook} id="hook">
                {name1 && name1 === 'set' ? <Set /> : null}
                {name1 && name1 === 'web' ? <Aboutweb /> : null}
              </div>
            </div>
        </div>
    )
}

export default Index