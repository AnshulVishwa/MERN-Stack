import React, { useState } from 'react'
import "./review.css"
import PostReview from './PostReview'

function ReviewPage({review}) {
    const [ reviews , setReviews ] = useState( review )
    const [ postReview , setpostReview ] = useState(false)
  return (
    <div className="ReviewPageMainBox flex">
        <div className="SideBarReviewPage flex">
            <div className="topTheSideBar flex">
                <div id='filterBoxRP' className="filterBoxRP boxRP">
                    Filter
                </div>
                <div onClick={() => {
                    setpostReview(true)                       
                }} className="newBoxRP boxRP">
                    New
                </div>
                <div
                    onClick={() => {
                        setReviews( (prev) => [...prev].sort(( a , b ) => b.stars - a.stars) )
                    }}
                 className="starBoxRP boxRP flex">
                    Star <i style={{ fontSize : "x-small" , marginLeft : "0.5em" }} className='fa-solid fa-chevron-up'></i>
                </div>
                <div onClick={() => {
                        setReviews( (prev) => [...prev].sort(( a , b ) => a.stars - b.stars) )
                    }} className="DateBoxRP flex boxRP">
                    Star <i style={{ fontSize : "x-small" , marginLeft : "0.5em" }} className='fa-solid fa-chevron-down'></i>
                </div>
                <div onClick={() => {
                    setReviews( (prev) => [...prev].sort(( a,b ) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime() ) )
                }} className="oldestBoxRP boxRP">
                    Oldest
                </div>
            </div>
        </div>
        { postReview && <PostReview setpostReview={setpostReview} /> }
        {
            !postReview &&
            <div className="contentREVIEWS flex">
                {
                    reviews.map( ( v ) => { 
                        let arrStars = new Array(v.stars).fill(1);
                        let emptyStars = new Array(5-v.stars).fill(1)
                        return(
                        <div className="contentRPBox flex">
                            <div className="blurWHiteEffect"></div>
                            <div className="divCOntentEnclosing flex">
                                <div className="statusOfReviewRP">
                                    { v.stars == 1 ? "Worst" : null }
                                    { v.stars == 2 ? "Bad" : null }
                                    { v.stars == 3 ? "Good" : null }
                                    { v.stars == 4 ? "Best" : null }
                                    { v.stars == 5 ? "Excellent" : null }
                                </div>
                                <div className="detailsEnclosingDiv flex">
                                    <div className="reviewDescription">
                                        {v.comment}
                                    </div>
                                    <div className="starsRPbox">
                                        {
                                            arrStars.map( () => <i id='star' class="fa-solid fa-star"></i> )
                                        }
                                        {
                                            emptyStars.map( () => <i id='star' class="fa-regular fa-star"></i> )
                                        }
                                    </div>
                                    <div className="timeDateReviewRP flex">
                                        {v.dateTime.split(",")[0]}
                                    </div>       
                                </div>
                            </div>
                        </div>
                    )} )
                }
            </div>
        }
        <div onClick={() => {
            document.querySelector(".mainProductDivMain-P").scrollIntoView({behaviour : "smooth"})
        }} className="upArrowProductReviewPage flex">
            <i className='fa-solid fa-chevron-up'></i>
        </div>
    </div>
  )
}

export default ReviewPage
