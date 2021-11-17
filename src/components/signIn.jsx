import React from 'react';
import { authentication } from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const history = useNavigate();
  const signInGoogle = () =>{
    const provider = new GoogleAuthProvider();
      signInWithPopup(authentication, provider)
      .then((re) =>{
        console.log(re);
        const UserName = re.user.displayName;
        localStorage.setItem('userName', UserName);
        history("/page")
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div>
        <header className="App-header">
          <GoogleButton
            onClick={() => {
              signInGoogle()
            }}>
          </GoogleButton>
        </header>
    </div>
  );
};

export default SignIn;