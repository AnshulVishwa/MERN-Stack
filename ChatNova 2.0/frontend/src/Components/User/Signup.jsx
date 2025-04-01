import background from "./background.jpg";
import "./style.css";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const result = await axios.post("http://localhost:5000/user/signup", { username, password, name, age, dob, gender });
        alert(result.data.msg);
        if( result.data.msg == "User created"  ){
            navigate(`/`)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="back-login flex">
                <img src={background} className="back-image-login" alt="background" />
                <div className="back-content-login gap flex">
                    <h1>Signup</h1>
                    <div className="input-group flex ">
                        <div className="input-full-name gap flex com-for-input">
                            <span>Full Name : </span>
                            <input 
                                placeholder="Full Name" 
                                className="input-signup input-h-w"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                        </div>
                        <div className="input-user-name gap flex com-for-input">
                            <span>UserName : </span>
                            <input 
                                placeholder="Username" 
                                className="input-signup input-h-w"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                        </div>
                        <div className="input-password gap flex com-for-input">
                            <span>Password : </span>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="input-signup input-h-w"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>
                        <div className="input-confirm-pass gap flex com-for-input">
                            <span>Confirm Password : </span>
                            <input 
                                type="password" 
                                placeholder="Confirm Password" 
                                className="input-signup input-h-w"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                        </div>
                        <div className="age-signup flex gap com-for-input">
                            <span>Age : </span>
                            <input 
                                type="number" 
                                value={age} 
                                placeholder='Enter Age'
                                onChange={(e) => setAge(e.target.value)} 
                                className="age-input-signup input-h-w" 
                            />
                        </div>
                        <div className="dob-signup flex gap com-for-input">
                            <span>Date of Birth : </span>
                            <input 
                                type="date" 
                                className="dob-input-signup input-h-w"
                                value={dob}
                                onChange={(e) => setDOB(e.target.value)}
                            />
                        </div>
                        <div className="gender-signup flex gap com-for-input">
                            <label htmlFor="gender">Gender : </label>
                            <select
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)} 
                                name="gender" 
                                className="gender-signup"
                            >
                                <option value="">--Select Gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="Rather not say">Rather not say</option>
                            </select>

                        </div>
                    </div>
                    <button type="submit" className="button-signup">
                        Signup
                    </button>
                </div>
            </form>
        </>
    );
}

export default Signup;
