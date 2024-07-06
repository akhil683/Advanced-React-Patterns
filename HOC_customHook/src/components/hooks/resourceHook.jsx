import axios from "axios";
import { useEffect, useState } from "react";

export const useResource = ({ getData }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return resource;
};
