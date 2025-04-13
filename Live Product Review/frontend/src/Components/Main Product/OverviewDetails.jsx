import React from 'react'

function OverviewDetails({data}) {
  return (
    <div className="productOverview flex">
        <div className="bigHeadingOverview">Overview of All Reviews</div>
        <div className="totalReviews">Total { data.reviews.length } Reviews</div>
        <div className="doubleArrow">
        <svg className='SVG flex' width="100" height="100" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path className='chevronFront' d="M13.7335 6.78033C14.0263 6.48744 14.0263 6.01256 13.7335 5.71967C13.4406 5.42678 12.9657 5.42678 12.6728 5.71967L6.42279 11.9697C6.1299 12.2626 6.1299 12.7374 6.42279 13.0303L12.6728 19.2803C12.9657 19.5732 13.4406 19.5732 13.7335 19.2803C14.0263 18.9874 14.0263 18.5126 13.7335 18.2197L8.01379 12.5L13.7335 6.78033Z" fill="#000000"/>
            <path className='chevronBack' d="M18.2335 6.78033C18.5263 6.48744 18.5263 6.01256 18.2335 5.71967C17.9406 5.42678 17.4657 5.42678 17.1728 5.71967L10.9228 11.9697C10.6299 12.2626 10.6299 12.7374 10.9228 13.0303L17.1728 19.2803C17.4657 19.5732 17.9406 19.5732 18.2335 19.2803C18.5263 18.9874 18.5263 18.5126 18.2335 18.2197L12.5138 12.5L18.2335 6.78033Z" fill="#000000"/>
        </svg>

        </div>
        <div className="seeAllReviews flex">See all Reviews <svg width="25" height="25" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path d="M5.54779 9.09467C5.84069 8.80178 6.31556 8.80178 6.60846 9.09467L12.3281 14.8143L18.0478 9.09467C18.3407 8.80178 18.8156 8.80178 19.1085 9.09467C19.4013 9.38756 19.4013 9.86244 19.1085 10.1553L12.8585 16.4053C12.5656 16.6982 12.0907 16.6982 11.7978 16.4053L5.54779 10.1553C5.2549 9.86244 5.2549 9.38756 5.54779 9.09467Z" fill="#000000"/>
        </svg>
</div>
    </div>
  )
}

export default OverviewDetails
