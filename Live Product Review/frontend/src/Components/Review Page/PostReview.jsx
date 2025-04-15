import React, { useEffect, useState } from 'react'
import "./review.css"

function PostReview({setpostReview}) {
    const [arr , setArr] = useState(new Array(5).fill(0))
    useEffect( () => console.log(arr) , [arr] )
  return (
    <div className='CreateReview flex'>
        <div className="headingPostReview">
            Tell us, what you think about this Product?
        </div>
        <form className='form flex'>
            <div className="inputTakeDescription">
                <input
                    placeholder='description...'
                />
            </div>
            <div className="InputTakeStars">
                {
                    arr.map( (v , i) => (
                        <>
                            <i onClick={ () => setArr(() => {
                                const newArr = new Array(5).fill(1 , 0 , i+1)
                                newArr.fill( 0 , i+1 )
                                return newArr
                            }) } className ={ v == 0 ? "fa-regular fa-star" : "fa-solid fa-star" }></i>
                        </>
                    ) )
                }
            </div>
            <div className="backButtonPost">
                <button onClick={() => setpostReview(false)}>Cancel</button>
            </div>
            <div className="backButtonSubmit">
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default PostReview
