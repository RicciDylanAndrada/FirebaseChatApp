import SignOut from "./SignOut";
import { useState, useEffect, useRef } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { db } from "../firebase";
import SendMessage from "./SendMessage";
function Chat() {
  const [visible, setVisible] = useState(true);

  // const [message, setMessage] = useState([]);
  const myRef = useRef(null);
  const el = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  const scrollToBottom = () => el.current.scrollIntoView();
  const query = db.collection("messages").orderBy("createdAt").limit("50");
  const [message] = useCollectionData(query, { idField: "id" });
  // useEffect(() => {
  //   db.collection("messages")
  //     .orderBy("createdAt")
  //     .limit("50")
  //     .onSnapshot((snapshot) =>
  //       setMessage(snapshot.docs.map((doc) => doc.data()))
  //     );
  //   executeScroll();
  // }, []);
  useEffect(() => {
    executeScroll();
  }, [message]);
  return (
    <div className="grid h-full    grid-cols-1 place-items-center w-full p-5 bg-zinc-700 ">
      <SignOut />
      <div className=" grid h-96  gap-4  w-full  overflow-auto scroll-smooth hover:scroll-auto pt-2	">
        {message &&
          message.map(({ id, text, photoURL, displayName }) => (
            <div ref={el} className="flex    " key={id}>
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
        {/* {d &&
          d.map((msg) => (
            <div>
              <img src={msg.photoURL} />
              <p>{msg.text}</p>
            </div>
          ))} */}
        <div ref={myRef} />
      </div>
      <div className=" w-full place-self-end  h-24  ">
        <SendMessage handleScrole={executeScroll} />
      </div>
    </div>
  );
}

export default Chat;
