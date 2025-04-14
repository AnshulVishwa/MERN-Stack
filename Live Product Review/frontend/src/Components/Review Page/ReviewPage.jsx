import React, { useState } from 'react'
import "./review.css"

function ReviewPage() {
    const [ reviews , setReviews ] = useState( [
        { "stars": 4, "comment": "Nice sound for the price!", "dateTime": "4/8/2025, 11:11:11 AM" },
        { "stars": 1, "comment": "One side stopped working after a week.", "dateTime": "4/7/2025, 2:12:09 PM" },
        { "stars": 2, "comment": "Gets tangled too much.", "dateTime": "4/6/2025, 3:14:55 PM" },
        { "stars": 3, "comment": "Okay for short-term use.", "dateTime": "4/5/2025, 1:01:44 PM" },
        { "stars": 1, "comment": "Wires are super delicate.", "dateTime": "4/4/2025, 12:30:15 PM" },
        { "stars": 4, "comment": "Great bass for the budget.", "dateTime": "4/3/2025, 2:00:00 PM" },
        { "stars": 2, "comment": "Mic isn't clear.", "dateTime": "4/2/2025, 4:49:12 PM" },
        { "stars": 1, "comment": "Poor build quality.", "dateTime": "4/1/2025, 11:57:57 AM" },
        { "stars": 4, "comment": "Nice sound for the price!", "dateTime": "3/31/2025, 5:13:00 PM" },
        { "stars": 3, "comment": "Decent for backups.", "dateTime": "3/30/2025, 2:40:30 PM" }
      ] )
  return (
    <div className="ReviewPageMainBox flex">
        <div className="SideBarReviewPage flex">
            <div className="topTheSideBar flex">
                <div id='filterBoxRP' className="filterBoxRP boxRP">
                    Filter
                </div>
                <div className="newBoxRP boxRP">
                    New
                </div>
                <div className="starBoxRP boxRP">
                    Star
                </div>
                <div className="oldestBoxRP boxRP">
                    Oldest
                </div>
                <div className="DateBoxRP boxRP">
                    Date
                </div>
            </div>
        </div>
        <div className="contentREVIEWS flex">
            {
                reviews.map( ( v , i ) => { 
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
                                { v.stars == 5 ? "Ecellent" : null }
                            </div>
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
                )} )
            }
        </div>
    </div>
  )
}

export default ReviewPage
