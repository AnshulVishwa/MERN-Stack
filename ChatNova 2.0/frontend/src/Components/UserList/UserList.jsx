import React, { useEffect, useRef, useState } from "react";
import "./UserList.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function UserList({ username }) {
    const path = useLocation();
    const pathname = path.pathname;
    const [selectedUser, setSelectedUser] = useState(pathname.split("/")[3] || null);
    const userRefs = useRef({}); 
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState([]);
    const [bringData, setBringData] = useState("");

    async function getAllUsers() {
        const result = await axios.get("http://localhost:5000/user");
        setData(result.data);
    }

    async function getAllMsgs() {
        const result = await axios.get("http://localhost:5000/msg/getAll");
        setMsg(result.data);
    }

    async function setReadMsg(user2) {
        await axios.post("http://localhost:5000/msg/setReadAll", {
            user1: username,
            user2: user2,
            sender: user2
        });
    }

    useEffect(() => {
        getAllUsers();
        getAllMsgs();
    }, []);

    useEffect(() => {
        getAllMsgs();
        getAllUsers();
        setBringData("");
    }, [bringData]);

    useEffect(() => {
        setInterval(() => {
            setBringData("1");
        }, 3000);
    }, []);

    useEffect(() => {
      setTimeout(() => {
          if (selectedUser && userRefs.current[selectedUser]) {
              userRefs.current[selectedUser].scrollIntoView({ behavior: "smooth", block: "start" });
          }
      }, 100);
  }, [selectedUser, data]); 
  
  

    return (
        <div className="UserLi">
            {data.map((user, i) => {
                if (user.username === username) return null;

                const recent = msg.filter(
                    (v) =>
                        (v.user2 === username && v.user1 === user.username) ||
                        (v.user1 === username && v.user2 === user.username)
                );

                return (
                    <div
                        ref={(el) => (userRefs.current[user.username] = el)}
                        key={i}
                        onClick={() => {
                            setReadMsg(user.username);
                            setSelectedUser(user.username);
                            navigate(`/chat/${username}/${user.username}`);
                        }}
                        className="Person flex"
                    >
                        <div className="border-Person flex">
                            <div className="PersonProfile flex">
                                <img src={`/${user.profile_picture}`} className="profileImg" alt="profile" />
                            </div>
                            <div className="PersonName flex">
                                <p className="username flex">{user.username}</p>
                                <span className="recentMsg flex">
                                    {recent.length !== 0 ? (
                                        <span className={recent[0].msgs[recent[0].msgs.length - 1].sender === username ? "send" : "received"}>
                                            {recent[0].recentMsg}
                                        </span>
                                    ) : (
                                        <span className="new-chat">new Chat</span>
                                    )}
                                </span>
                            </div>
                            <div className="readUnread flex">
                                {(() => {
                                    const len = msg.filter(
                                        (v) =>
                                            (v.user2 === username &&
                                                v.user1 === user.username &&
                                                v.msgs.some((m) => m.sender === user.username && m.read === false)) ||
                                            (v.user1 === username &&
                                                v.user2 === user.username &&
                                                v.msgs.some((m) => m.sender === user.username && m.read === false))
                                    ).length;
                                    return len !== 0 ? <div className="circleUnRead flex">{len}</div> : null;
                                })()}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default UserList;
