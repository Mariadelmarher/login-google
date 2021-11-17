import React, { useState ,useEffect} from "react";
import { authentication } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children, disableValidation }) {
  const [me, setMe] = useState("");
  const navigate = useNavigate()
  //pista con useNavigate
  useEffect(() => {
   const unsubs = authentication.onAuthStateChanged((user)=>{
     if (user) {
       console.log("Si estas logueado")
      setMe(user.uid);
      return
     } 
    console.log("No estas logueado")
     setMe("");
     navigate("/login")
   })
    return () => {
      // unsubcriptions functions
      unsubs()
    }
     }, [navigate])
  
  return (
    <React.Fragment>
      {(disableValidation || me !== "") && children}
    </React.Fragment>
  );
}

export default PrivateRoute;