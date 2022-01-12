import React from "react";
import { db, auth } from "../firebase";

const Sidebar = () => {
  const { photoURL, displayName } = auth.currentUser;

  return (
    <div className="bg-zinc-800 w-32 p-4 flex-block   ">
      <img
        className="h-20 mr-4  w-20  rounded-full "
        src={photoURL}
        alt=""
      ></img>
      <div className="text-center text-white mt-20">
        <h1 className="font-bold">Welcome </h1>
        <p className="font-medium">{displayName}</p>
      </div>
    </div>
  );
};
export default Sidebar;
