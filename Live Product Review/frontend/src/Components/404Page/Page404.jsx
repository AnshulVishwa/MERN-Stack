import React, { useEffect } from 'react'
import "./style.css"

function Page404() {
    useEffect( () => {
        setTimeout( () => window.location.href = "/" , 12000 )
    } , [] )
  return (
    <>
        <div className="videoDiv flex">
            <video
                className="Video404Class"
                src="/404.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
            <div className="heading404Err">
                <h1 style={ { fontFamily: "Moirai One" } }>Opps You Lost in Space!!</h1>
            </div>
            <div onClick={() => {
                window.location.href = "/"
            }} className="button404Err flex">
                <i className="fa-solid fa-chevron-left"></i>
                <h1 style={ { fontFamily: "Moirai One" } }>Go Back</h1>
            </div>
        </div>
    </>
  )
}

export default Page404
