import React from "react";
import { useStateValue } from "../context/stateProvider";
export const Profile = () => {
  const [{ isLogged }] = useStateValue();

  return (
    <>
      {isLogged ? (
        <div>
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address}</p>
            <p>{user.phone}</p>
            <p>{user.bio}</p>
          </div>
        </div>
      ) : (
        <div> Error you not are logged</div>
      )}
    </>
  );
};
