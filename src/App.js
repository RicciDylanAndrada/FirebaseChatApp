import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import firebase from "firebase/compat/app";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App w-full h-full ">
      {user ? (
        <div className="">
          <Chat />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
