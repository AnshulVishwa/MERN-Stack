import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import "./Styles/home.css";
import back_image from "../assets/home.jpg";
import Card from './Card';
import { useNavigate } from "react-router";
import Loader from './Loader.jsx';

function Home() {
  const [res, setRes] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [myCards, setMyCards] = useState([]);
  const [mainCard, setMainCard] = useState(null);

  useEffect(() => {
    setLoader(!res);
  }, [res]);

  useEffect(() => {
    const loaderElement = document.querySelector(".loader");
    if (loaderElement) {
      loaderElement.style.display = loader ? "flex" : "none";
    }
  }, [loader]);

  async function GetReq() {
    setLoader(true);
    try {
      const response = await axios.get("http://localhost:5000/info", { withCredentials: true });
      setRes(true);

      if (response.data.msg) {
        alert(response.data.msg);
        navigate("/");
      } else {
        setUsers(response.data.users);
        setMyCards(response.data.myCards.ArrayOfObj);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    GetReq();
  }, []);

  useEffect(() => {
    if (!users.length || !myCards.length) return;

    try {
      const ids = new Set(myCards.map(v => v.id)); // Using a Set for efficiency
      const updatedUsers = users.map(user => ({
        ...user,
        bool: ids.has(user._id.toString())
      }));
      setUsers(updatedUsers);
    } catch (err) {
      console.error("Error updating user states:", err);
    }
  }, [myCards]);

  return (
    <>
      <div className="mainDiv flex">
        <img className='imgage' src={back_image} alt="Background" />
        <header className='flex'>
          <Navbar />
        </header>
        {loader && <div style={{zIndex : 5}} className='loader'><Loader /></div>}
        <div className="middleDiv flex">
          <div id={mainCard ? "setCard" : "hideCard"} className="sectionCard">
            {users.map((user, i) => (
              <div key={i} onClick={() => setMainCard(user)} className="card flex">
                <div className="cardContent flex">
                  {user.bool && <div>Mine</div>}
                  <span className="heading cardInfo">{user.username}</span>
                  <span className="age cardInfo">{user.age}</span>
                  <span className="profession cardInfo">{user.profession}</span>
                </div>
              </div>
            ))}
          </div>
          <div id={mainCard ? "setMainCard" : "hideMainCard"} className="sectionMainCard flex">
            {mainCard && <Card users={mainCard} setMainCard={setMainCard} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
