import Button from '@mui/material/Button';
import firebase from "firebase/compat/app";
import {auth} from "../firebase"
function SignIn() {
    const signinWithGoogle=()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    
      }
    return (
        <div>
            <Button variant="contained" onClick={signinWithGoogle} >
        Sign In
      </Button>   
           </div>
    )

}

export default SignIn
