import React from 'react'
import "./Styles/home.css"

function Card({users , setMainCard}) {
  return (
    <>
        <div className="maincard flex">
            <h1 className="cross" onClick={() => setMainCard(false)}><i class="fa-solid fa-xmark"></i></h1>
            <div className=" main mainName">{users.username}</div>
            <div className=" main mainage">Age : {users.age}</div>
            <div className=" main mainDOB">Date of Birth : {users.dob}</div>
            <div className=" main mainGender">Gender : {users.gender}</div>
            <div className=" main mainProfession">Profession : {users.profession}</div>
            <div className=" main mainDescription">{users.description}</div>
        </div>
    </>
  )
}

export default Card