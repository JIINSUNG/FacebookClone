import React from 'react';
import "./Login.css";
import {auth, provider} from './firebase';
import {  signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';


function Login() 
{   const [state,dispatch] = useStateValue();


    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user,
            });

        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
        });    
    }

  return (
    <div className='login'>
      <div className="login__logo">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsprSO1LA2iy0gXuRA_03ut1U_FlRW8Vung&usqp=CAU" alt =""/>
        <img width = {300}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAApCAMAAAA4Y0Y/AAAAbFBMVEVIZ6r///9FZan5+vw1WqQ6XaZBYqg9X6cyWKMtVaLw8ffq7fTl6PLK0eNnfrYpU6FddrK/x95XcrCYpsuHmMORoMjX3OrQ1ubFzOG3wNrd4e2os9JRba2hrc+Bk8Gxu9d2irwcTJ4ORpxuhLlApouHAAADVklEQVRYhe2V2bKjOAyGwXsMwSwBwpKQdN7/HVu/WPp0T5LD1HTV3EQXgLGsz5IlOYo+8pGPfOQ/ivg3unuVv1fUZhx3GnPK7FNUpPgeLKKjjOP4tMegSb1M1R5s76W3b1Wcj+O9XEuKqduheCBXvH6nYer4f+HagmxV97Dr3P4iVx/JVr4zSf8e1x7ALbUlslFIV2Mt+y6sck7z5/Y1c0lPr+Exm9KyRMHSxiVj9plPZTelZKubuky4uk2bOlymabCRcI+uSfszHbuNhpa+rk7M3B9Vkx5P7LUxF0zVjm27jJY0XeY2rj1NU3f9J1hk8SqZ7vld0Mu7yDTrf7UkXtxb5vYtj1ryxp6WKZ+Ty+q8jI5q4YoRwycN5AvXFMsHrUicWrE+XPmFYjsrG/+SyZrbNpAiUsU2OquZ65pXhZIXXQInu05gwZBdAUgODKuyrKoOOIdHCAO9Ruamt0fHO3WYKrIbAjXpHP/qrEYTygK4Dlaap2kobEB0RuUQsnMQ9gHuHXuvlRDGlgjc3dqArSuOmxEBsb4hin0QxnBcsLFKCT6W6Q4u4PH4olSWOrJYVlNIHHPhAieiwD6aYRguZGTgyQPlUwUI3KEUjBxrH2eIwEbbH6SdIirVq2b5lXv6jXvggPw6w4WL+uUmVyFEF7LLyWAQAraIjYILb5PwAvuG6zaunCW+bNzqK5fTx4KLa21cuSksX1/1wYXLHgyabifm4mdGS4RBuhROkBjDdRSTCwohvKIYzrSLQLkoHX7dqO1gowWfL7SleX++XFGyDJwxSYA/iTgEk2lEzCitDzYTzO3ugctvVJJT/Y5QtVwCqQ4aSX7ifGYrxYtrc+3PCvrxfCcmzkh++7i/T/hqi2MaN0v9Stai0cBLWJXaXcJL+LHUb+AafB7plbu2EJ8y97HmUrS1EModcOd2RbGhvR7XmYpOqJTxNrX0KxyS1E8jbQvvJe4jkwPQR633vYrMWMAr2ZZCVRwKmU7CeO+nDMO2hBuqxrdsHrh6jOiwxBfUGF1CVmykBzI+PC8lq/V8YQkV5aMSNIai0HbMS4PToUeel8LRbUG6xqgxF2p2gqbKch2QqTEfZ2t6tgrj39/sf3Zwsf0Q4re5r4M/Zr6FfOQjH/nIfvkJaaIsEa/B1HwAAAAASUVORK5CYII=" />
      </div>
      <button onClick = {signIn}  type = "submit">Sign in</button>
    </div>
  )
}

export default Login
