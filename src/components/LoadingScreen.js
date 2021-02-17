import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import '../styles/styles.css';

const LoadingScreen = () => {
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../loading_panda.json')
        })
    }, [])

    return (
        <div className="loading">
            <div className='container loading' ref={container}>  </div>
        </div>
    )
}

export default LoadingScreen
