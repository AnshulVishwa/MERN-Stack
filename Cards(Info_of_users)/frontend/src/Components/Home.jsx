import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import "./Styles/home.css"
import back_image from "../assets/home.jpg"
import Card from './Card'
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate()
  const [users , setUsers] = useState()
  const [ myCards , setMyCards ] = useState([""])
  const [ mainCard , setMainCard ] = useState()

  async function GetReq() {
    await axios.get("http://localhost:5000/info", { withCredentials: true })

    .then((res) => {
        if (res.data.msg){
          alert(res.data.msg)
          navigate("/")
        }
        else{
          setUsers(res.data.users);
          setMyCards(res.data.myCards)
        }
    })
    .catch((err) => {
        console.error("Error fetching users:", err);
    });
}

  useEffect( () => {
    GetReq()
  } , [] )

  useEffect(() => {
    try {
      const ids = myCards?.ArrayOfObj?.map((v) => v.id) ?? []; // Ensure it's always an array
      const filter =  users?.filter( (v) => ids.includes(v._id.toString()) )
      filter = filter.map( ( v ) => v.bool = true )
      setUsers( (prev) => ( [ ...prev , ...filter ] ) )
    } catch (err) { }
  }, [myCards, setUsers]);
  

  return (
    <>
    <div className="mainDiv flex">
        <img className='imgage' src={back_image} />
        <header className='flex'>
          <Navbar />
        </header>
        <div className="middleDiv flex">
          <div  id={(mainCard) ? "setCard" : "hideCard"} className="sectionCard">
            {
              users?.map( (v , i) => (
                <div key={i} onClick={() => setMainCard(v)} className="card flex">
                  <div className="cardContent flex">
                    {
                       v.bool && <div>Mine</div>
                    }
                    <span className="heading cardInfo">{v.username}</span>
                    <span className="age cardInfo">{v.age}</span>
                    <span className="profession cardInfo">{v.profession}</span>
                  </div>
                </div>
              ) )
            }
          </div>
          <div  id={(mainCard) ? "setMainCard" : "hideMainCard"} className="sectionMainCard flex">
            {mainCard && <Card users={mainCard} setMainCard={setMainCard} />}
          </div>
        </div>
    </div>
    </>
  )
}

export default Home