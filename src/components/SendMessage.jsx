import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
const SendMessage = ({ handleScrole }) => {
  const [msg, setMsg] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    await db.collection("messages").add({
      displayName,
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setMsg("");
  };
  return (
    <div className=" h-full  ">
      <div className="   border-t-2  h-full w-full items-center  flex p-2 ">
        <form className="w-full flex " onSubmit={sendMessage}>
          <input
            type="text"
            className="grow rounded-md w-full
            h-14 text-left p-2"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            placeholder="Send Message"
          />
          <button
            onClick={handleScrole}
            className="w-24 bg-zinc-400	ml-4       hover:bg-zinc-500 rounded-md "
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default SendMessage;
