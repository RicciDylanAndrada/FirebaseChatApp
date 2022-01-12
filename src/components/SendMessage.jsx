import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
const SendMessage = () => {
  const [msg, setMsg] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setMsg("");
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          placeholder="Send Message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default SendMessage;
