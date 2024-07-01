import React, { useeffect, usestate } from "react";
import axios from "axios";

//This is more Generic or specific data loader components

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = usestate([
    {
      name: "sarah waters",
      age: 55,
      country: "united kingdom",
      books: ["fingersmith", "the night watch"],
    },
  ]);

  useeffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      console.log(response.data);
      //setResource(response.data)
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        //react.childern is the children component - userinfo
        //user will be passed to the children of this container.
        //we can access this users as a user prop in chidren element
        console.log(child);
        console.log(children);
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default ResourceLoader;
