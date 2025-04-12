import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="textHomeFooter flex">
            <h2 className='textHome flex'>A Place where Customers Provide their Valuable Feedback</h2>
        </div>
        <div onClick={() => {
            document.querySelector(".productsPage")?.scrollIntoView({ behavior: "smooth" });
          }} className="downArrow flex">
            <svg className='downArrowHomeFooter' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75002 6.75C5.44668 6.75 5.1732 6.93273 5.05711 7.21299C4.94103 7.49324 5.00519 7.81583 5.21969 8.03033L11.4697 14.2803C11.6103 14.421 11.8011 14.5 12 14.5C12.1989 14.5 12.3897 14.421 12.5304 14.2803L18.7804 8.03033C18.9949 7.81583 19.059 7.49324 18.9429 7.21299C18.8268 6.93273 18.5534 6.75 18.25 6.75H5.75002Z" fill="#323544"/>
                <path d="M18.7804 12.5303C19.0732 12.2374 19.0732 11.7626 18.7804 11.4697C18.4875 11.1768 18.0126 11.1768 17.7197 11.4697L12 17.1893L6.28035 11.4697C5.98746 11.1768 5.51258 11.1768 5.21969 11.4697C4.9268 11.7626 4.9268 12.2374 5.21969 12.5303L11.4697 18.7803C11.7626 19.0732 12.2375 19.0732 12.5304 18.7803L18.7804 12.5303Z" fill="#323544"/>
            </svg>
        </div>
    </footer>
  )
}

export default Footer
