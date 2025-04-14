import React from 'react'

function OverviewDetails({data}) {
  return (
    <div className="productOverview flex">
        <div className="bigHeadingOverview">Overview of All Reviews</div>
        <div className="totalReviews">Total { data.reviews.length } Reviews</div>
        <div className="doubleArrow">
        <div className='SVG flex' width="100" height="100" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
          <i id='SayChevron1' class="fa-solid fa-chevron-left ChevronArr1"></i>
          <i id='SayChevron2' class="fa-solid fa-chevron-left ChevronArr2"></i>
          <i id='SayChevron3' class="fa-solid fa-chevron-left ChevronArr3"></i>
        </div>

        </div>
        <div onClick={() => {
          document.querySelector(".ReviewPageMainBox").scrollIntoView({behaviour:"smooth"})
        }} style={{cursor : "pointer"}} className="seeAllReviews flex">See all Reviews <svg width="25" height="25" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path d="M5.54779 9.09467C5.84069 8.80178 6.31556 8.80178 6.60846 9.09467L12.3281 14.8143L18.0478 9.09467C18.3407 8.80178 18.8156 8.80178 19.1085 9.09467C19.4013 9.38756 19.4013 9.86244 19.1085 10.1553L12.8585 16.4053C12.5656 16.6982 12.0907 16.6982 11.7978 16.4053L5.54779 10.1553C5.2549 9.86244 5.2549 9.38756 5.54779 9.09467Z" fill="#000000"/>
        </svg>
</div>
    </div>
  )
}

export default OverviewDetails
