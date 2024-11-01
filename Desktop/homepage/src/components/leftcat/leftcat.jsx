import s from './leftcat.module.scss'
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/animations/cat.json';
const Leftcat = () => {
    const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      animationData: animationData
    });
    anim.setSpeed(.5)
  },[]);
    return(
        <div className={s.all}>
            <div ref={containerRef} style={{height: "100%"}}></div>
        </div>
    )
}

export default Leftcat