import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const postUser = (email, pass)=> {
        fetch("http://localhost:9292/users", {
          method: "POST",
          body: JSON.stringify({email:email,password:pass}),
          headers: {
            "Content-type": "application/json",
            // Accept: "application.json"
        }})
      }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <Button onClick={() => postUser()}> Login </Button>
            </form>


        </div>
    )
}
