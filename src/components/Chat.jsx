import SignOut from "./SignOut";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import SendMessage from "./SendMessage";
function Chat() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit("50")
      .onSnapshot((snapshot) =>
        setMessage(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  return (
    <div className="grid h-full    grid-cols-1 place-items-center w-full p-5 bg-zinc-700 ">
      <SignOut />
      <div className=" grid h-96 gap-4  w-full  overflow-auto	p-2">
        {message.map(({ id, text, photoURL, displayName }) => (
          <div className="flex    " key={id}>
            <img
              className="h-8 mr-4  w-8 rounded-full "
              src={photoURL}
              alt=""
            ></img>
            <div className="flex-block ">
              <div>
                <p className=" text-white text-sm font-bold">{displayName}</p>
              </div>

              <div>
                <p className=" text-white font-normL text-sm">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full place-self-end  h-24  ">
        <SendMessage />
      </div>
    </div>
  );
}

export default Chat;
