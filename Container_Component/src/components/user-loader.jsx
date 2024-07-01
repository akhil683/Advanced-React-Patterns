import React, { useeffect, usestate } from "react";
import axios from "axios";

const userloader = ({ userid, children }) => {
  const [user, setuser] = usestate({
    name: "sarah waters",
    age: 55,
    country: "united kingdom",
    books: ["fingersmith", "the night watch"],
  });

  useeffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userid}`);
      console.log(response.data);
    })();
  }, [userid]);

  return (
    <>
      {React.Children.map(children, (child) => {
        //react.childern is the children component - userinfo
        //user will be passed to the children of this container.
        //we can access this users as a user prop in chidren element
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

export default userloader;
