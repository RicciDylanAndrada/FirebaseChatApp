import React from "react";
import { db, auth } from "../firebase";
import SignOut from "./SignOut";

const Sidebar = () => {
  const { photoURL, displayName } = auth.currentUser;

  return (
    <div className="bg-zinc-800 w-32 grid-rows-2 grid  h-full   p-4 flex-block   ">
      <div className="text-center text-white ">
        <img
          className="h-20 mr-4 mb-8 w-20  rounded-full "
          src={photoURL}
          alt=""
        ></img>
        <h1 className="font-bold mb-8">Welcome </h1>
        <p className="font-medium">{displayName}</p>
      </div>
      <div className="place-self-end">
        <SignOut />
      </div>
    </div>
  );
};
export default Sidebar;
