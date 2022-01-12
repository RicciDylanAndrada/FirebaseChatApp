import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
const SendMessage = () => {
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
    <div className="  border-t-2">
      <form onSubmit={sendMessage}>
        <div className="  flex p-4">
          <input
            type="text"
            className="grow rounded-md
            h-10 text-left p-2"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            placeholder="Send Message"
          />
          <button
            className="w-12 bg-zinc-400	ml-4       hover:bg-zinc-500 rounded-md "
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default SendMessage;
