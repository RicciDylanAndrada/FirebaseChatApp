import Button from "@mui/material/Button";
import { auth } from "../firebase";
function SignOut() {
  return (
    <div className="text-xs mt-12	">
      <Button
        className="w-20 "
        variant="contained"
        onClick={() => auth.signOut()}
      >
        {" "}
        <p className="text-xs	">Sign Out</p>
      </Button>
    </div>
  );
}

export default SignOut;
