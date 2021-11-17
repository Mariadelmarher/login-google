import React from 'react';
import {authentication} from "../firebase-config"
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";

// import Button from '@mui/material/Button';

const Page = () => {
    const history = useNavigate();
    const signOutt = () =>{
        signOut(authentication).then(() => {
          history("/")
          console.log("salio");
        }).catch((err) => {
         console.log(err)
        });
    }
    return (
        <div>
            <header className="App-header">
            {localStorage.getItem('userName')} 
                <button className='logout' onClick={()=>{
                    signOutt()
                }}>
                    Logout
                </button>
                {/* <Button variant="contained">Contained</Button> */}
            </header>
        </div>
    );
};

export default Page;