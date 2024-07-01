import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState({
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      console.log(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        //React.Childern is the children component - UserInfo
        //User will be passed to the children of this container.
        //We can access this Users as a user prop in chidren element
        console.log(child);
        console.log(children);
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
