import Button from '@mui/material/Button';
import { auth } from '../firebase';
function SignOut() {
    return (
        <div>
            <Button variant="contained" onClick={() => auth.signOut()} > Sign Out</Button>
        </div> 
    )
}

export default SignOut
